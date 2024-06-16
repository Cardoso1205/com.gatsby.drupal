import React, { FC } from "react";
import { CardProps } from "../../types";

const Card: FC<CardProps> = ({
  image,
  title,
  description,
  variant = "general",
}) => {
  const isGeneral = variant === "general";
  const variantStyles = !isGeneral
    ? "h-[280px] bg-no-repeat bg-cover bg-center rounded-md flex items-end p-4 text-white"
    : "text-sm";

  return (
    <div
      className={variantStyles}
      {...(!isGeneral && { style: { backgroundImage: `url(${image})` } })}
    >
      {isGeneral && <img className="rounded-md w-full" src={image} />}
      <div className="mt-3">
        <h4 className="font-medium text-xl mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
