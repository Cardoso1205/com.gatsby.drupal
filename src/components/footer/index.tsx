import React, { FC } from "react";
import { FooterProps } from "../../types";

const Footer: FC<FooterProps> = ({ title, description, navigation }) => {
  return (
    <div className="flex my-6">
      <div className="w-3/12 space-y-2">
        <h2 className="font-medium text-lg">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="w-9/12 grid grid-cols-4">
        {navigation.map((item) => (
          <div>
            <p className="font-medium mb-5">{item.title}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {item.links.map((link) => (
                <li>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
