import React, { FC } from "react";
import { useTranslation } from "react-i18next";

export const AuthPage: FC = () => {
  const { t } = useTranslation("AuthPage");

  return (
    <>
      <h1>AuthPage page</h1>
      <p>{t("title")}</p>
    </>
  );
};
