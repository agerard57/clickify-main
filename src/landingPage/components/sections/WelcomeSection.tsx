import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";

import { LandingPageImage } from "../../assets";

export const WelcomeSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <>
      <HighlightText textVariant={TypographyVariants.TITLE} text={t("welcome.title")} />
      <img src={LandingPageImage} style={{ height: 400, marginTop: 50 }} />
    </>
  );
};
