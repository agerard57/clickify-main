import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ButtonVariants, TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography, useTheme } from "@mui/material";

import { CardContentProps } from "../../../typings";

const CardContent = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;

  & > span {
    text-align: center;
  }
`;

const CardContainer = styled.div`
  border-radius: 12px;
  padding: 20px 15px;
  width: 300px;
  height: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const CardIcon = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

interface CardProps {
  sectionTitle: string;
  cardContent: CardContentProps;
  handleOpen: (current: string) => void;
}

export const Card: FC<CardProps> = ({ sectionTitle, cardContent, handleOpen }) => {
  const { t } = useTranslation("LandingPage");
  const theme = useTheme();

  const translationKeyPrefix = `${sectionTitle}.cards.${cardContent.title}`;

  return (
    <CardContainer
      style={{
        background: theme.app.landingPage.sections.contact.cardBackground,
        boxShadow: theme.app.landingPage.sections.contact.boxShadow,
        border: theme.app.landingPage.sections.contact.cardBorder,
      }}
    >
      <CardContent>
        <Typography variant={TypographyVariants.SUBTITLE}>{t(`${translationKeyPrefix}.title`)}</Typography>
        <CardIcon icon={cardContent.icon} style={{ color: theme.app.landingPage.sections.contact.iconColor }} />
        <Typography>{t(`${translationKeyPrefix}.content`)}</Typography>
      </CardContent>
      <Button variant={ButtonVariants.PRIMARY} onClick={() => handleOpen(cardContent.title)}>
        {t(`${translationKeyPrefix}.button`)}
      </Button>
    </CardContainer>
  );
};
