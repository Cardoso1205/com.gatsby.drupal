import React, { FC } from "react";
import { NavbarProps } from "../../types";
import Button from "../button";

const Navbar: FC<NavbarProps> = ({ logo, links, ctas }) => {
  return (
    <nav className="flex justify-around py-6 items-center">
      <p className="font-bold text-xl">{logo}</p>
      <ul className="flex gap-x-3">
        {links.map((link) => (
          <li>
            <a href={link.to}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-3">
          {ctas.map((cta) => (
            <Button variant={cta.variant} to={cta.to}>{cta.children}</Button>
          ))}
        </div>
    </nav>
  );
};

export default Navbar;
