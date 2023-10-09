import React, { FC } from "react";

import styled from "@emotion/styled";

import { Navbar } from "./Navbar";

interface Props {
  children: JSX.Element;
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionWrapper>{children}</SectionWrapper>
    </>
  );
};
