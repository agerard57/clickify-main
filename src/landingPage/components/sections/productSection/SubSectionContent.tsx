import styled from "@emotion/styled";
import React, { FC } from "react";
import { UnselectedSubSectionChoice, FirstSubSectionChoice } from "./subSections";
import { ProductSubSections } from "../../../typings";

interface Props {
  currentSubSection: ProductSubSections;
}

export const SubSectionContent: FC<Props> = ({ currentSubSection }) => {
  const SubSectionContentWrapper = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    margin-left: 46px;
  `;

  return (
    <SubSectionContentWrapper>
      {currentSubSection === 0 && <UnselectedSubSectionChoice />}
      {currentSubSection === 1 && <FirstSubSectionChoice />}
    </SubSectionContentWrapper>
  );
};
