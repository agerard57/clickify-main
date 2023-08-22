import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { aboutImages } from "../../../../assets";
import { styles } from "../../../../styles";

export const FirstSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  const { Card, Image, SubSectionWrapper } = styles.aboutSection();

  return (
    <SubSectionWrapper>
      <Image src={aboutImages[1]} width="30%" />
      <Card width="40%">
        <Typography variant={TypographyVariants.PARAGRAPH}>{t("about.subSections.story.content")}</Typography>
      </Card>
    </SubSectionWrapper>
  );
};
