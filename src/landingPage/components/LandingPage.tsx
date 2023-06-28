import styled from "@emotion/styled";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { HighlightText } from "@/core";
import { TypographyVariants } from "@/theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { LandingPageImage } from "../assets";

export const LandingPage: FC = () => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const LandingPageWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 100%;
    height: -webkit-fill-available;
  `;

  const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  `;

  const Image = styled.img`
    height: 400px;
    margin-top: 50px;
  `;

  const BottomWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
  `;

  const Icon = styled(FontAwesomeIcon)`
    height: 25px;
    margin-top: 15px;
    color: ${theme.app.landingPage.icon};
  `;

  return (
    <LandingPageWrapper>
      <WelcomeContent>
        <HighlightText textVariant={TypographyVariants.TITLE} text={t("welcome.title")} />
        <Image src={LandingPageImage} />
      </WelcomeContent>
      <BottomWrapper>
        <Typography variant={TypographyVariants.SUBTITLE}>{t("welcome.more")}</Typography>
        <Icon icon={faCircleDown} />
      </BottomWrapper>
    </LandingPageWrapper>
  );
};
