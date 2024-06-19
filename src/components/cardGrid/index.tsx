import React, { FC } from "react";
import Card from "../card";
import { CardGridProps } from "../../types";

const CardGrid: FC<CardGridProps> = ({
  title,
  description,
  cards,
  columns,
  variant = "general",
}) => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      <p className="mb-7">{description}</p>
      <div className={`grid gap-4 grid-cols-${columns}`}>
        {cards &&
          cards.map((card) => (
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              variant={variant}
            />
          ))}
      </div>
    </div>
  );
};

export default CardGrid;
