import React, { FC } from "react";
import { PromoCardProps } from "../../types";
import Button from "../button";

const PromoCard: FC<PromoCardProps> = ({ image, title, cta }) => {
  return (
    <div
      className="h-[280px] p-16 bg-no-repeat bg-cover bg-center rounded-md my-12"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-1/2 flex flex-col justify-between h-full">
        <h2 className="text-white font-medium text-3xl">{title}</h2>
        <Button to={cta.to}>{cta.label}</Button>
      </div>
    </div>
  );
};

export default PromoCard;
