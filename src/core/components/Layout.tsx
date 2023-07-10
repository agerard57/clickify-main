import styled from "@emotion/styled";
import React, { FC } from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: JSX.Element;
}

const SectionWrapper = styled.div`
  height: 99vh!;
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionWrapper>{children}</SectionWrapper>
    </>
  );
};
