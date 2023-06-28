import React, { FC } from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
