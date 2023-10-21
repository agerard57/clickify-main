import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { Cards as CardsEnum, ContactCategory } from "../../../typings";
import { Card } from "./Card";

interface CategoryProps {
  section: ContactCategory;
  handleOpen: (current: CardsEnum) => void;
}

export const Category: FC<CategoryProps> = ({ section, handleOpen }) => {
  const { t } = useTranslation("LandingPage");

  const translationKeyPrefix = `contact.categories.${section.title}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <Typography variant={TypographyVariants.SECTION_TITLE}>{t(`${translationKeyPrefix}.title`)}</Typography>
      <div style={{ display: "flex", gap: 20, margin: 10 }}>
        {section.cards.map((cardContent, cardIndex) => (
          <Card sectionTitle={translationKeyPrefix} cardContent={cardContent} handleOpen={handleOpen} key={cardIndex} />
        ))}
      </div>
    </div>
  );
};
