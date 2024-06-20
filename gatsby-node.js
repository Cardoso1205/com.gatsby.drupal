const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      drupal {
        mainNavigation: menuByName(name: "main") {
          __typename
          links {
            label
            url {
              path
            }
          }
        }
        nodeQuery(
          filter: {
            conditions: [{ operator: EQUAL, field: "type", value: ["page"] }]
          }
          sort: { field: "created", direction: DESC }
        ) {
          entities {
            entityUrl {
              path
            }
            entityId
            ... on Drupal_NodePage {
              vid
            }
          }
        }
      }
    }
  `).then((result) => {
    const entities = result.data.drupal.nodeQuery.entities;
    const mainNavigationLinks = result.data.drupal.mainNavigation.links.map(
      (link) => {
        return {
          label: link.label,
          to: link.url.path,
        };
      }
    );

    actions.createSlice({
      id: "navigation",
      component: path.resolve(`src/components/navbar/index.tsx`),
      context: {
        links: mainNavigationLinks
      }
    });

    entities.forEach((entity) => {
      actions.createPage({
        path: entity.entityUrl.path,
        component: path.resolve(`src/templates/nodePage.tsx`),
        context: {
          id: entity.entityId,
        },
      });
    });
  });
};
