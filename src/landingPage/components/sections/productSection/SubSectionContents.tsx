import React, { FC } from "react";

import styled from "@emotion/styled";

import { ProductSubSections } from "../../../typings";
import {
  FirstSubSectionChoice,
  SecondSubSectionChoice,
  ThirdSubSectionChoice,
  UnselectedSubSectionChoice,
} from "./subSections";

interface Props {
  currentSubSection: ProductSubSections;
}

export const SubSectionContents: FC<Props> = ({ currentSubSection }) => {
  const SubSectionContentWrapper = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    margin-left: 46px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `;

  const SubSections = [
    UnselectedSubSectionChoice,
    FirstSubSectionChoice,
    SecondSubSectionChoice,
    ThirdSubSectionChoice,
  ];

  return (
    <SubSectionContentWrapper>
      {SubSections.map((SubSection, index) => {
        return currentSubSection === index && <SubSection key={index} />;
      })}
    </SubSectionContentWrapper>
  );
};
