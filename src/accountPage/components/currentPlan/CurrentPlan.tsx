import React, { FC } from "react";
import { useTranslation } from "react-i18next";

// TODO
// ☞ 747d4797-2eda-4561-b803-734023a18d97
// eslint-disable-next-line import/no-internal-modules
import { PriceBox } from "@/core/components/PriceBox";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { PlanTypes } from "@clickify/clickify-common";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

interface DisplayDataProps {
  labels: string[];
  placeholders: string[];
}

const DisplayData: FC<DisplayDataProps> = ({ labels, placeholders }) => {
  const { t } = useTranslation("AccountPage");

  return (
    <>
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
    </>
  );
};

const DataSection = styled.section`
  margin-bottom: 10px;
`;

export const CurrentPlan: FC = () => {
  const { t } = useTranslation("AccountPage");

  const testObject = {
    currentPlan: PlanTypes.CLICKIFY as PlanTypes.BASIC | PlanTypes.CLICKIFY | PlanTypes.PREMIUM,
    legalName: "Ikea",
    tradingName: "Ikea EN",
    email: "ikea@agerard.dev",
    billingAddress: ["1 rue du trou aux Serpents", "57140 La Maxe", "Grand-Est, France"],
    registeredOn: "2019-04-23",
    lastPasswordGen: "2022-12-04",
    updatedOn: "2023-02-02",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>{t("company.title")}</Typography>
      <DataSection>
        <DisplayData labels={[t("plan.content.currentPlan")]} placeholders={[testObject.legalName]} />
        <DisplayData labels={[t("plan.content.expiresOn")]} placeholders={[testObject.tradingName]} />
      </DataSection>
      <PriceBox plan={testObject.currentPlan} isStatic={true} />
      <Button variant={ButtonVariants.PRIMARY}>{t("plan.content.buttons.changePlan")}</Button>
      <Button variant={ButtonVariants.TEXT}>{t("plan.content.buttons.cancelPlan")}</Button>
    </div>
  );
};

/* 
      <h1>AccountPages page</h1>
      <p>{t("title")}</p> 
      Outlet 
      */
