import React, { FC } from "react";
import {
  Hero,
  Wrapper,
  Alert,
  CardGrid,
  PromoCard,
  PreFooter,
} from "../components";

const ParagraphHero: FC<any> = ({ entity }) => {
  const fields = entity.fieldInputs.map(({ entity }: any) => {
    return {
      placeholder: entity.fieldPlaceholder,
      type: entity.fieldType,
    };
  });

  const ctas = entity.fieldCtas.map(({ entity }: any) => {
    return {
      children: entity.fieldCta.title,
      to: entity.fieldCta.url.path,
      target: entity.fieldTarget,
      variant: entity.fieldVariant,
    };
  });
  return (
    <Wrapper key={entity.uuid}>
      <Hero
        title={entity.fieldTitle}
        description={entity.fieldDescription}
        image={entity.fieldImage.url}
        fields={fields}
        ctas={ctas}
      />
    </Wrapper>
  );
};

const ParagraphAlert: FC<any> = ({ entity }) => {
  return (
    <Wrapper key={entity.uuid}>
      <Alert
        text={entity.fieldTitle}
        cta={{
          label: entity.fieldCta.title,
          to: entity.fieldCta.url.path,
        }}
      />
    </Wrapper>
  );
};

const ParagraphCardGrid: FC<any> = ({ entity }) => {
  const cards = entity.fieldCards.map(({ entity }: any) => {
    return {
      title: entity.fieldTitle,
      description: entity.fieldDescription,
      image: entity.fieldImage.url,
    };
  });
  return (
    <Wrapper key={entity.uuid}>
      <CardGrid
        title={entity.fieldTitle}
        description={entity.fieldDescription}
        variant={entity.fieldCardVariant}
        columns={entity.fieldColumns}
        cards={cards}
      />
    </Wrapper>
  );
};

const ParagraphPromoCard: FC<any> = ({ entity }) => {
  return (
    <Wrapper key={entity.uuid}>
      <PromoCard
        title={entity.fieldTitle}
        image={entity.fieldImage.url}
        cta={{
          label: entity.fieldCta.title,
          to: entity.fieldCta.url.path,
        }}
      />
    </Wrapper>
  );
};

const ParagraphPreFooter: FC<any> = ({ entity }) => {
  return (
    <Wrapper key={entity.uuid}>
      <PreFooter
        title={entity.fieldTitle}
        cta={{
          label: entity.fieldCta.title,
          to: entity.fieldCta.url.path,
        }}
      />
    </Wrapper>
  );
};

export const resolve: FC<any> = (entity) => {
  if (!entity.__typename) {
    return <></>;
  }
  const componentsMap: any = {
    ParagraphHero,
    ParagraphAlert,
    ParagraphCardGrid,
    ParagraphPromoCard,
    ParagraphPreFooter
  };

  const entityTypeName = entity.__typename?.replace("Drupal_", "");

  if (componentsMap.hasOwnProperty(entityTypeName)) {
    return componentsMap[entityTypeName]({ entity });
  }

  return <></>;
};

export const componentResolver: FC<any> = (data) => {
  const components: any = [];
  if (data) {
    data.forEach((item: any) => {
      const { entity } = item;
      components.push(resolve(entity || item));
    });
  }

  return components;
};
