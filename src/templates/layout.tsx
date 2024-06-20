import React, { FC } from "react";
import { Slice } from "gatsby";
import { Wrapper, Footer } from "../components";
import { FooterProps } from "../types";

const Layout: FC<any> = ({ children }) => {
  const footerProps = {
    title: "myDreamPlace",
    description: "Your next goto companion for travel",
    navigation: [
      {
        title: "Company",
        links: [
          {
            to: "/",
            label: "About",
          },
          {
            to: "/",
            label: "Jobs",
          },
          {
            to: "/",
            label: "Newsroom",
          },
          {
            to: "/",
            label: "Advertisign",
          },
          {
            to: "/",
            label: "Contact us",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            to: "/",
            label: "About",
          },
          {
            to: "/",
            label: "Jobs",
          },
          {
            to: "/",
            label: "Newsroom",
          },
          {
            to: "/",
            label: "Advertisign",
          },
          {
            to: "/",
            label: "Contact us",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            to: "/",
            label: "About",
          },
          {
            to: "/",
            label: "Jobs",
          },
          {
            to: "/",
            label: "Newsroom",
          },
          {
            to: "/",
            label: "Advertisign",
          },
          {
            to: "/",
            label: "Contact us",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            to: "/",
            label: "About",
          },
          {
            to: "/",
            label: "Jobs",
          },
          {
            to: "/",
            label: "Newsroom",
          },
          {
            to: "/",
            label: "Advertisign",
          },
          {
            to: "/",
            label: "Contact us",
          },
        ],
      },
    ],
  } as FooterProps;

  return (
    <>
      <Slice alias="navigation" />
      {children}
      <Wrapper>
        <Footer {...footerProps} />
      </Wrapper>
    </>
  );
};

export default Layout;
