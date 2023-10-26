import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { PriceBox } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { PlanTypes } from "@clickify/clickify-common";
import styled from "@emotion/styled";
import { Button, Typography, useTheme } from "@mui/material";

const LayoutGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "label placeholder";
  margin-bottom: 10px;
  justify-items: end;
`;

interface DisplayDataProps {
  labels: string[];
  placeholders: string[];
}

const DisplayData: FC<DisplayDataProps> = ({ labels, placeholders }) => {
  const { t } = useTranslation("AccountPage");

  return (
    <LayoutGrid>
      <div style={{ gridArea: "label", display: "flex", flexDirection: "column" }}>
        {labels.map((label, index) => (
          <Typography key={index} variant={TypographyVariants.INPUT_LABEL}>
            {label}
          </Typography>
        ))}
      </div>

      <div style={{ gridArea: "placeholder", display: "flex", flexDirection: "column" }}>
        {placeholders.length > 0 ? (
          placeholders.map((placeholder, index) => (
            <Typography key={index} variant={TypographyVariants.INPUT_PLACEHOLDER}>
              {placeholder}
            </Typography>
          ))
        ) : (
          <Typography variant={TypographyVariants.INPUT_PLACEHOLDER}>{t("company.content.display.noData")}</Typography>
        )}
      </div>
    </LayoutGrid>
  );
};

export const CurrentPlan: FC = () => {
  const { t } = useTranslation("AccountPage");
  const theme = useTheme();

  const testObject = {
    currentPlan: PlanTypes.CLICKIFY as PlanTypes.BASIC | PlanTypes.CLICKIFY | PlanTypes.PREMIUM,
    since: "2022-12-04",
    exp: "2023-02-02",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>{t("plan.title")}</Typography>

      <div style={{ padding: "20px 0" }}>
        <DisplayData labels={[t("plan.content.since")]} placeholders={[testObject.since]} />
        <DisplayData labels={[t("plan.content.exp")]} placeholders={[testObject.exp]} />
      </div>
      <PriceBox plan={testObject.currentPlan} isStatic={true} />
      <Button variant={ButtonVariants.PRIMARY} style={{ width: "100%", margin: 15 }}>
        {t("plan.content.buttons.changePlan")}
      </Button>
      <Button
        variant={ButtonVariants.TEXT}
        style={{ width: "80%", color: theme.app.accountPage.currentPlan.cancelButton }}
      >
        {t("plan.content.buttons.cancelPlan")}
      </Button>
    </div>
  );
};

/* 
      <h1>AccountPages page</h1>
      <p>{t("title")}</p> 
      Outlet 
      */
