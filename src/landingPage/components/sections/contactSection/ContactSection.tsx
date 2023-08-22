import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { Category } from "./Categories";

export const ContactSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useContext(ConstantsContext);

  const CategoriesContainer = styled.div`
    display: flex;
    margin-top: 6%;
    justify-content: space-between;
    gap: 45px;
  `;

  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>{t("contact.title")}</Typography>
      <CategoriesContainer>
        {appConstants.landingPage.sections.contact.categories.map((section, index) => (
          <Category key={index} section={section} />
        ))}
      </CategoriesContainer>
    </>
  );
};
