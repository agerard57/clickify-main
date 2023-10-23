import React, { FC, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { useConstants } from "@/constants";
import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { Cards } from "../../../typings";
import { Category } from "./Categories";
import { Modal } from "./modal";

export const ContactSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useConstants();

  const [open, setOpen] = useState<Cards | null>(null);

  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>{t("contact.title")}</Typography>
      <Modal open={open} setOpen={setOpen} />
      <div style={{ display: "flex", marginTop: "6%", justifyContent: "space-between", gap: 45 }}>
        {appConstants.landingPage.sections.contact.categories.map((section, index) => (
          <Category key={index} section={section} handleOpen={setOpen} />
        ))}
      </div>
    </>
  );
};
