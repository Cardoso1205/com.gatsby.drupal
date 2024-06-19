import React, { FC } from "react";
import { Wrapper, Navbar, Footer } from "../components";
import { FooterProps, NavbarProps } from "../types";

const Layout: FC<any> = ({ children }) => {
  const navProps = {
    logo: "my Dream Place",
    links: [
      {
        label: "Home",
        to: "",
      },
      {
        label: "Discover",
        to: "",
      },
      {
        label: "Activities",
        to: "",
      },
      {
        label: "About",
        to: "",
      },
      {
        label: "Contact",
        to: "",
      },
    ],
    ctas: [
      {
        children: "Register",
        to: "",
        variant: "secondary",
      },
      {
        children: "Sign In",
        to: "",
        variant: "primary",
      },
    ],
  } as NavbarProps;

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
      <Navbar {...navProps} />
      {children}
      <Wrapper>
        <Footer {...footerProps} />
      </Wrapper>
    </>
  );
};

export default Layout;
