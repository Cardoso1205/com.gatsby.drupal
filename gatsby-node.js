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
        footer: menuByName(name: "footer") {
          __typename
          links {
            label
            url {
              path
            }
            links {
              label
              url {
                path
              }
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
    const mainNavigationLinks = result.data.drupal.mainNavigation.links.map(
      (link) => {
        return {
          label: link.label,
          to: link.url.path,
        };
      }
    );
    const footerLinks = result.data.drupal.footer.links.map((link) => {
      return {
        title: link.label,
        links: link.links.map((link) => {
          return {
            label: link.label,
            to: link.url.path,
          };
        }),
      };
    });

    actions.createSlice({
      id: "navigation",
      component: path.resolve(`src/components/navbar/index.tsx`),
      context: {
        links: mainNavigationLinks,
      },
    });

    actions.createSlice({
      id: "footer",
      component: path.resolve(`src/components/footer/index.tsx`),
      context: {
        navigation: footerLinks,
      },
    });

    const entities = result.data.drupal.nodeQuery.entities;

    entities.forEach((entity) => {
      const pathname = entity.entityUrl.path ? "/" : entity.entityUrl.path;

      actions.createPage({
        path: pathname,
        component: path.resolve(`src/templates/nodePage.tsx`),
        context: {
          id: entity.entityId,
        },
      });
    });
  });
};
