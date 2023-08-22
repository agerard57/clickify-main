import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";

import { aboutImages } from "../../../../assets";
import { styles } from "../../../../styles";

export const ThirdSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  const { Card, Image, SubSectionWrapper } = styles.aboutSection();

  return (
    <SubSectionWrapper>
      {/* TODO Change this crap */}
      <Image src={aboutImages[1]} width="30%" />
      <Card width="30%">
        <Typography variant={TypographyVariants.PARAGRAPH}>{t("about.subSections.team.content")}</Typography>
      </Card>
    </SubSectionWrapper>
  );
};
