import React, { FC } from "react";

import styled from "@emotion/styled";

import { AboutSubSections } from "../../../typings";
import { SubSectionContents } from "./SubSectionContents";
import { SubSectionChoices } from "./SubSectionsChoices";

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 100%;
`;

export const AboutSection: FC = () => {
  const [currentSubSection, setCurrentSubSection] = React.useState<AboutSubSections>(AboutSubSections.STORY);

  return (
    <AboutSectionWrapper>
      <SubSectionChoices currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
      <SubSectionContents currentSubSection={currentSubSection} />
    </AboutSectionWrapper>
  );
};
