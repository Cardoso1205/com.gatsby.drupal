import React, { FC } from "react";
import Button from "../button";
import Input from "./input";
import { HeroProps } from "../../types";

const Hero: FC<HeroProps> = ({ image, title, description, fields, ctas }) => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-[500px] rounded-md bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white gap-5 py-6"
      >
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex bg-white p-3 gap-x-3 justify-between w-[80%] mx-auto drop-shadow-level-1 absolute bottom-[-40px] rounded-md left-1/2 transform -translate-x-1/2 right-0">
        {fields.map((field) => (
          <Input placeholder={field.placeholder} />
        ))}
        {ctas.map((cta) => (
          <Button to={cta.to}>{cta.children}</Button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
