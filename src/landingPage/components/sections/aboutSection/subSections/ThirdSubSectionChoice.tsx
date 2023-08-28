import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";

import { aboutImages } from "../../../../assets";
import { styles } from "../../../../styles";

const { Card, Image, SubSectionWrapper } = styles.aboutSection();

export const ThirdSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <SubSectionWrapper>
      <Image src={aboutImages[3]} width="50%" />
      <Card width="30%">
        <Typography variant={TypographyVariants.PARAGRAPH}>{t("about.subSections.team.content")}</Typography>
      </Card>
    </SubSectionWrapper>
  );
};
