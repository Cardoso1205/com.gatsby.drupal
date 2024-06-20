import React, { FC } from "react";
import { Slice } from "gatsby";

const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Slice alias="navigation" />
      {children}
      <Slice alias="footer" />
    </>
  );
};

export default Layout;
