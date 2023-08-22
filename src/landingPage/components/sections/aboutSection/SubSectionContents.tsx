import React, { FC } from "react";

import styled from "@emotion/styled";

import { AboutSubSections } from "../../../typings";
import { FirstSubSectionChoice, SecondSubSectionChoice, ThirdSubSectionChoice } from "./subSections";

interface Props {
  currentSubSection: AboutSubSections;
}

export const SubSectionContents: FC<Props> = ({ currentSubSection }) => {
  const SubSectionContentWrapper = styled.div`
    margin-left: 46px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `;

  const SubSections = {
    [AboutSubSections.STORY]: FirstSubSectionChoice,
    [AboutSubSections.MISSION]: SecondSubSectionChoice,
    [AboutSubSections.TEAM]: ThirdSubSectionChoice,
  };

  const CurrentSubSection = SubSections[currentSubSection];

  return (
    <SubSectionContentWrapper>
      <CurrentSubSection />
    </SubSectionContentWrapper>
  );
};
