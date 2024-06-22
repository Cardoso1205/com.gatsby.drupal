import type { GatsbyConfig } from "gatsby";
const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `www.gatsby.drupal`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Drupal",
        fieldName: "drupal",
        url: `${process.env.GATSBY_DRUPAL_URL}/graphql`,
        headers: {
          Authorization: `Basic ${Buffer.from(`${process.env.GATSBY_DRUPAL_USERNAME}:${process.env.GATSBY_DRUPAL_PASSWORD}`).toString("base64")}`,
        },
      },
    },
  ],
};

export default config;
