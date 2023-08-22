import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ButtonVariants, TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography, useTheme } from "@mui/material";

import { CardContentProps } from "../../../typings";

interface CardProps {
  sectionTitle: string;
  cardContent: CardContentProps;
}

export const Card: FC<CardProps> = ({ sectionTitle, cardContent }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const CardContainer = styled.div`
    border-radius: 12px;
    background: ${theme.app.landingPage.sections.contact.cardBackground};
    box-shadow: ${theme.app.landingPage.sections.contact.boxShadow};
    padding: 20px 15px;
    width: 300px;
    height: 400px;
    border: ${theme.app.landingPage.sections.contact.cardBorder};
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  `;

  const CardContent = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;

    & > :first-of-type {
      text-align: center;
    }
  `;

  const CardIcon = styled(FontAwesomeIcon)`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    color: ${theme.app.landingPage.sections.contact.iconColor};
  `;

  const translationKeyPrefix = `${sectionTitle}.cards.${cardContent.title}`;

  return (
    <CardContainer>
      <CardContent>
        <Typography variant={TypographyVariants.SUBTITLE}>{t(`${translationKeyPrefix}.title`)}</Typography>
        <CardIcon icon={cardContent.icon} />
        <Typography>{t(`${translationKeyPrefix}.content`)}</Typography>
      </CardContent>
      <Button variant={ButtonVariants.PRIMARY}>{t(`${translationKeyPrefix}.button`)}</Button>
    </CardContainer>
  );
};
