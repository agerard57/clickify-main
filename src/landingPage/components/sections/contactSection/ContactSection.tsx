import React, { FC, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Cards } from "../../../typings";

import { Category } from "./Categories";
import { Modal } from "./modal";

const CategoriesContainer = styled.div`
  display: flex;
  margin-top: 6%;
  justify-content: space-between;
  gap: 45px;
`;

export const ContactSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useContext(ConstantsContext);

  const [open, setOpen] = useState<Cards | null>(null);

  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>{t("contact.title")}</Typography>
      <Modal open={open} setOpen={setOpen} />
      <CategoriesContainer>
        {appConstants.landingPage.sections.contact.categories.map((section, index) => (
          <Category key={index} section={section} handleOpen={setOpen} />
        ))}
      </CategoriesContainer>
    </>
  );
};
