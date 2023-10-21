import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { ButtonVariants, TypographyVariants } from "@/theme";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "label placeholder";
  margin-bottom: 10px;
  padding: 0 10%;
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

const DataSection = styled.section`
  margin-bottom: 10px;
`;

export const CompanyInformation: FC = () => {
  const { t } = useTranslation("AccountPage");

  const testObject = {
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
      <div
        style={{
          borderRadius: 36,
          border: "1px solid #848484",
          background: "#FAFAFA",
          width: 535,
          height: 334,
          flexShrink: 0,
          margin: 10,
          padding: 20,
          display: "grid",
        }}
      >
        <DataSection>
          <DisplayData labels={[t("company.content.display.legalName")]} placeholders={[testObject.legalName]} />
          <DisplayData labels={[t("company.content.display.tradingName")]} placeholders={[testObject.tradingName]} />
        </DataSection>
        <DataSection>
          <DisplayData labels={[t("company.content.display.email")]} placeholders={[testObject.email]} />
        </DataSection>
        <DataSection>
          <DisplayData
            labels={[t("company.content.display.billingAddress")]}
            placeholders={[...testObject.billingAddress]}
          />
        </DataSection>
        <DataSection>
          <DisplayData labels={[t("company.content.display.registeredOn")]} placeholders={[testObject.registeredOn]} />
          <DisplayData
            labels={[t("company.content.display.lastPasswordGen")]}
            placeholders={[testObject.lastPasswordGen]}
          />
          <DisplayData labels={[t("company.content.display.updatedOn")]} placeholders={[testObject.updatedOn]} />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("company.content.display.button")}</Button>
      </div>
    </div>
  );
};
