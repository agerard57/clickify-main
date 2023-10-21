import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, useTheme } from "@mui/material";

import { SectionSpec } from "../typings";

interface Props {
  sectionSpec: SectionSpec;
  onClick?: () => void;
}

export const EmptySection: FC<Props> = ({ sectionSpec, onClick }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sectionSpec.sectionContent}

      {sectionSpec.nextSectionText && (
        <div style={{ bottom: 40, position: "absolute", display: "flex", flexDirection: "column" }}>
          <Typography variant={TypographyVariants.SENTENCE}>{t(`${sectionSpec.name}.more`)}</Typography>
          <FontAwesomeIcon
            icon={faCircleDown}
            onClick={onClick}
            style={{ height: 25, marginTop: 15, color: theme.app.landingPage.icon }}
          />
        </div>
      )}
    </div>
  );
};
