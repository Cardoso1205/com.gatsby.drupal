import React, { FC } from "react";
import Wrapper from "../wrapper";
import { FooterProps } from "../../types";

const Footer: FC<FooterProps> = ({ sliceContext }) => {
  return (
    <>
      <Wrapper>
        <div className="flex my-6">
          <div className="w-3/12 space-y-2">
            <h2 className="font-medium text-lg">myDreamPlace</h2>
            <p className="text-sm text-gray-500">
              Your next goto companion for travel
            </p>
          </div>
          <div className="w-9/12 grid grid-cols-4">
            {sliceContext.navigation.map((item) => (
              <div>
                <p className="font-medium mb-5">{item.title}</p>
                <ul className="text-sm space-y-1">
                  {item.links.map((link) => (
                    <li>
                      <a
                        className={`${link.label === "See more" ? "text-blue-700" : "text-gray-500"} hover:underline transition-all`}
                        href={link.to}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <div className="py-2 text-sm bg-gray-200 text-right text-gray-500">
        <Wrapper>&#169; my Dream Place 2022</Wrapper>
      </div>
    </>
  );
};

export default Footer;
