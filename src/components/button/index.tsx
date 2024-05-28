import React, { FC } from "react";
import { ButtonProps } from "../../types";

const Button: FC<ButtonProps> = ({
  children,
  to,
  target,
  variant = "primary",
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-800",
    secondary: "bg-white border border-blue-600 hover:bg-blue-700 hover:text-white",
  };
  return (
    <a
      href={to}
      target={target ?? "_blank"}
      className={`py-3 px-5 rounded-md transition-all ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;
