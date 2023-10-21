import React, { FC } from "react";

import styled from "@emotion/styled";

import { Navbar } from "./Navbar";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionWrapper>{children}</SectionWrapper>
    </>
  );
};
