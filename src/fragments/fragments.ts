import { graphql } from "gatsby";

export const NodePage = graphql`
  fragment NodePage on Drupal_NodePage {
    title
    fieldComponents {
      __typename
      ...FieldNodePageFieldComponents
    }
  }
`;

export const Drupal_FieldNodePageFieldComponents = graphql`
  fragment FieldNodePageFieldComponents on Drupal_FieldNodePageFieldComponents {
    entity {
      __typename
      ...ParagraphHero
      ...ParagraphAlert
      ...ParagraphCardGrid
    }
  }
`;

export const ParagraphInput = graphql`
  fragment ParagraphInput on Drupal_ParagraphInput {
    fieldPlaceholder
    fieldInputType
  }
`;

export const ParagraphHero = graphql`
  fragment ParagraphHero on Drupal_ParagraphHero {
    uuid
    fieldTitle
    fieldDescription
    fieldImage {
      url
      alt
    }
    fieldInputs {
      entity {
        __typename
        ...ParagraphInput
      }
    }
    fieldCtas {
      entity {
        __typename
        ...ParagraphButton
      }
    }
  }
`;

export const ParagraphButton = graphql`
  fragment ParagraphButton on Drupal_ParagraphButton {
    fieldCta {
      title
      url {
        path
      }
    }
    fieldTarget
    fieldVariant
  }
`;

export const ParagraphAlert = graphql`
  fragment ParagraphAlert on Drupal_ParagraphAlert {
    uuid
    fieldTitle
    fieldCta {
      title
      url {
        path
      }
    }
  }
`;

export const ParagraphCard = graphql`
  fragment ParagraphCard on Drupal_ParagraphCard {
    uuid
    fieldTitle
    fieldDescription
    fieldImage {
      url
      alt
    }
    fieldCta {
      title
      url {
        path
      }
    }
  }
`;

export const ParagraphCardGrid = graphql`
  fragment ParagraphCardGrid on Drupal_ParagraphCardGrid {
    fieldTitle
    fieldDescription
    fieldCardVariant
    fieldColumns
    fieldCards {
      entity {
        ...ParagraphCard
      }
    }
  }
`;
