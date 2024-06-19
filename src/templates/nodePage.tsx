import React, { FC } from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import { componentResolver } from "../utils/component-resolver";

const NodePage: FC<any> = ({ data: drupal }) => {
  const data = drupal.drupal.nodeById;
  // console.log("data", data);

  const components = componentResolver(data.fieldComponents);
  console.log("components", components);

  return <Layout>{components}</Layout>;
};

export default NodePage;

export const pageQuery = graphql`
  query nodePage($id: String!) {
    drupal {
      nodeById(id: $id) {
        __typename
        ...NodePage
      }
    }
  }
`;
