import React, { FC } from "react";
import { AlertProps } from "../../types";
import { GoAlert } from "react-icons/go";

const Alert: FC<AlertProps> = ({ text, cta }) => {
  return (
    <div className="bg-orange-100 p-6 rounded-md w-full flex items-center my-6">
      <GoAlert className="mr-5 w-8 h-8" />
      {text}
      {cta && <a className="text-blue-800 pl-2" href={cta.to}>{cta.label}</a>}
    </div>
  );
};

export default Alert;
