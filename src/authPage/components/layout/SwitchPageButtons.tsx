import React, { FC } from "react";

import styled from "@emotion/styled";

import { AuthPages } from "../../typings";
import { SwitchPageButton } from "./SwitchPageButton";

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 11px;
  margin: 120px 0 0 0;
  height: 45px;
  overflow: hidden;
`;

interface SwitchPageButtonsProps {
  currentlySelected: AuthPages;
}

export const SwitchPageButtons: FC<SwitchPageButtonsProps> = ({ currentlySelected }) => (
  <SwitchContainer>
    <SwitchPageButton page={AuthPages.SIGN_UP} currentlySelected={currentlySelected} />
    <div style={{ width: "5px" }} />
    <SwitchPageButton page={AuthPages.LOGIN} currentlySelected={currentlySelected} />
  </SwitchContainer>
);
