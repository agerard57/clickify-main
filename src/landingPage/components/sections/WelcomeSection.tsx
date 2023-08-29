import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";

import { LandingPageImage } from "../../assets";

export const WelcomeSection: FC = () => {
  const { t } = useTranslation("LandingPage");

  const Image = styled.img`
    height: 400px;
    margin-top: 50px;
  `;

  return (
    <>
      <HighlightText textVariant={TypographyVariants.TITLE} text={t("welcome.title")} />
      <Image src={LandingPageImage} />
    </>
  );
};
