import React, { FC } from "react";
import { InputProps } from "../../types";

const Input:FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      className="bg-gray-200 py-3 rounded-md w-full pl-3"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
