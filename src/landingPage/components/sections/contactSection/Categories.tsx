import React, { FC, Key } from "react";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ContactCategory } from "../../../typings";
import { Card } from "./Card";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
`;

interface CategoryProps {
  key: Key;
  section: ContactCategory;
}

export const Category: FC<CategoryProps> = ({ section, key }) => {
  const { t } = useTranslation("LandingPage");

  const translationKeyPrefix = `contact.categories.${section.title}`;

  return (
    <CategoryContainer key={key}>
      <Typography variant={TypographyVariants.SECTION_TITLE}>{t(`${translationKeyPrefix}.title`)}</Typography>
      <Cards>
        {section.cards.map((cardContent, cardIndex) => (
          <Card sectionTitle={translationKeyPrefix} cardContent={cardContent} key={cardIndex} />
        ))}
      </Cards>
    </CategoryContainer>
  );
};
