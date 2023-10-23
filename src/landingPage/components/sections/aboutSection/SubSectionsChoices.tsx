import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";

import { useConstants } from "@/constants";
import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import { css, useTheme } from "@mui/material";

import { AboutSubSections } from "../../../typings";

interface SubSectionChoicesProps {
  currentSubSection: AboutSubSections;
  setCurrentSubSection: Dispatch<SetStateAction<AboutSubSections>>;
}

export const SubSectionChoices: FC<SubSectionChoicesProps> = ({ currentSubSection, setCurrentSubSection }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();
  const appConstants = useConstants();
  const [hovering, setHovering] = useState<AboutSubSections | null>(null);

  const onClick = (choice: AboutSubSections) => setCurrentSubSection(choice);
  const onMouseEnter = (choice: AboutSubSections) => setHovering(choice);
  const onMouseLeave = () => setHovering(null);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "5%" }}>
      {appConstants.landingPage.sections.about.map((choice, index) => (
        <div
          key={index}
          onClick={() => onClick(choice)}
          onMouseEnter={() => onMouseEnter(choice)}
          onMouseLeave={onMouseLeave}
          style={{ cursor: "pointer", userSelect: "none" }}
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
        </div>
      ))}
    </div>
  );
};
