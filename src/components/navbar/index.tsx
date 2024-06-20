import React, { FC } from "react";
import { NavbarProps, Link, ButtonProps } from "../../types";
import Button from "../button";

const Navbar: FC<NavbarProps> = ({ sliceContext }) => {
  const ctas: ButtonProps[] = [
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
  ];
  return (
    <nav className="flex justify-around py-6 items-center">
      <p className="font-bold text-xl">my Dream Place</p>
      <ul className="flex gap-x-3">
        {sliceContext?.links.map((link: Link) => (
          <li>
            <a href={link.to}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-3">
        {ctas.map((cta) => (
          <Button variant={cta.variant} to={cta.to}>
            {cta.children}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
