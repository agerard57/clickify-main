import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { aboutImages } from "../../../../assets";
import { styles } from "../../../../styles";

const { Card, Image, SubSectionWrapper } = styles.aboutSection();

export const SecondSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <SubSectionWrapper>
      <Card width="50%">
        <Typography variant={TypographyVariants.PARAGRAPH}>{t("about.subSections.mission.content")}</Typography>
      </Card>
      <Image src={aboutImages[2]} width="20%" />
    </SubSectionWrapper>
  );
};
