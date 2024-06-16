import React, { FC } from "react";
import { PreFooterProps } from "../../types";

const PreFooter: FC<PreFooterProps> = ({ title, cta }) => {
  return (
    <div className="my-6 text-center">
      <h2 className="text-3xl font-medium">{title}</h2>
      {cta?.label && (
        <div className="mt-4">
          <a href={cta.to} className="text-blue-700 hover:text-blue-700">
            {cta.label}
          </a>
        </div>
      )}
    </div>
  );
};

export default PreFooter;
