import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, useTheme } from "@mui/material";

import { SectionSpec } from "../typings";

const BottomWrapper = styled.div`
  bottom: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

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
        <BottomWrapper>
          <Typography variant={TypographyVariants.SENTENCE}>{t(`${sectionSpec.name}.more`)}</Typography>
          <FontAwesomeIcon
            icon={faCircleDown}
            onClick={onClick}
            style={{ height: 25, marginTop: 15, color: theme.app.landingPage.icon }}
          />
        </BottomWrapper>
      )}
    </div>
  );
};
