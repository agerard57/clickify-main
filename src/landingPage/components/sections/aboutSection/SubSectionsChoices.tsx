import React, { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { css, Typography, useTheme } from "@mui/material";

import { ConstantsContext } from "@/constants";
import { AboutSubSections } from "../../../typings";

interface SubSectionChoiceElementProps {
  item: AboutSubSections;
  isSelected: boolean;
  setCurrentSubSection: Dispatch<SetStateAction<AboutSubSections>>;
}

const SubSectionChoiceElement: FC<SubSectionChoiceElementProps> = ({ item, isSelected, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const onClick = () => setCurrentSubSection(item);

  const SubSectionChoice = styled.div`
    cursor: pointer;
    user-select: none;
    padding: 10px 0;
  `;

  const SubSectionChoiceTextNumber = styled(Typography)`
    color: ${theme.app.landingPage.sections.about[isSelected ? "selected" : "notSelected"]};
    padding: 10px 0;
  `;

  const SubSectionChoiceTextTitle = styled(HighlightText)`
    padding: 100px 0;
  `;

  const SubSectionChoiceHorizontalSeparator = styled.div`
    width: 10%;
    height: 1px;
    margin: 10px 0;
    background-color: ${theme.app.landingPage.sections.about[isSelected ? "selected" : "notSelected"]};
  `;

  return (
    <SubSectionChoice onClick={onClick}>
      <SubSectionChoiceTextNumber variant={TypographyVariants.TITLE}>
        {t(`about.subSections.${item}.number`)}
      </SubSectionChoiceTextNumber>
      <SubSectionChoiceHorizontalSeparator />
      <SubSectionChoiceTextTitle
        textVariant={TypographyVariants.SUBTITLE}
        text={t(`about.subSections.${item}.title`)}
        highlightAllText={isSelected}
      />
    </SubSectionChoice>
  );
};

interface SubSectionChoicesProps {
  currentSubSection: AboutSubSections;
  setCurrentSubSection: Dispatch<SetStateAction<AboutSubSections>>;
}

export const SubSectionChoices: FC<SubSectionChoicesProps> = ({ currentSubSection, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();
  const appConstants = useContext(ConstantsContext);
  const [hovering, setHovering] = useState<AboutSubSections | null>(null);

  const onClick = (choice: AboutSubSections) => setCurrentSubSection(choice);
  const onMouseEnter = (choice: AboutSubSections) => setHovering(choice);
  const onMouseLeave = () => setHovering(null);

  const SubSectionChoicesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5%;
  `;

  const Choice = styled.div`
    cursor: pointer;
    user-select: none;
  `;

  return (
    <SubSectionChoicesWrapper>
      {appConstants.landingPage.sections.about.map((choice, index) => (
        <Choice
          key={index}
          onClick={() => onClick(choice)}
          onMouseEnter={() => onMouseEnter(choice)}
          onMouseLeave={onMouseLeave}
        >
          <HighlightText
            textVariant={TypographyVariants.TITLE}
            text={t(`about.subSections.${choice}.title`)}
            overrideStyles={
              currentSubSection !== choice && hovering !== choice
                ? {
                    nonHighlighted: css`
                      color: ${theme.app.landingPage.sections.about.notSelected.notHighlighted};
                    `,
                    highlighted: css`
                      background: ${theme.app.landingPage.sections.about.notSelected.highlighted};
                      padding: 10px 0;
                    `,
                  }
                : undefined
            }
          />
        </Choice>
      ))}
    </SubSectionChoicesWrapper>
  );
};
