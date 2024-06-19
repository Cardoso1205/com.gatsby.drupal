const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      drupal {
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

    entities.forEach((entity) => {
      actions.createPage({
        path: entity.entityUrl.path,
        component: path.resolve(`src/templates/nodePage.tsx`),
        context: {
            id: entity.entityId
        },
      });
    });
  });
};
