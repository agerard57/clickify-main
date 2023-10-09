import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { TextField } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { Button, Typography } from "@mui/material";

import { AuthPages } from "../typings";
import { AuthLayout } from "./layout";

export const AuthPage: FC = () => {
  const { t } = useTranslation("AuthPage");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pageParam = queryParams.get("page") as AuthPages;

  const currentlySelected =
    pageParam === "login" ? AuthPages.LOGIN : pageParam === "signUp" ? AuthPages.SIGN_UP : AuthPages.SIGN_UP;

  return (
    <AuthLayout currentlySelected={currentlySelected}>
      <>
        <Typography variant={TypographyVariants.TITLE} style={{ paddingBottom: 20 }}>
          {t(`${currentlySelected}.title`)}
        </Typography>
        <TextField
          autoFocus
          inputPosition="top"
          placeholder={t("inputs.email.placeholder")}
          inputLabel={t("inputs.email.label")}
          required
        />
        <TextField
          inputPosition="top"
          placeholder={t("inputs.password.placeholder")}
          inputLabel={t("inputs.password.label")}
          required
        />
        <Button variant={ButtonVariants.PRIMARY}>{t(`${currentlySelected}.title`)}</Button>
      </>
    </AuthLayout>
  );
};
