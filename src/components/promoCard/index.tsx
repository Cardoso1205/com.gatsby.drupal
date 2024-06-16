import React, { FC } from "react";
import { PromoCardProps } from "../../types";
import Button from "../button";

const PromoCard: FC<PromoCardProps> = ({ image, title, cta }) => {
  return (
    <div className="my-6">
      <div className="h-[280px] p-16 bg-no-repeat bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${image})` }}>
        <div className="w-1/2 flex flex-col justify-between h-full">
          <h2 className="text-white font-medium text-3xl">
            Download the mobile application for bonus coupons and travel codes
          </h2>
          <Button to="">Download mobile app</Button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
