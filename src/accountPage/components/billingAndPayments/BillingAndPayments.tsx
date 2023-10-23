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
  label: string;
  placeholders: string[];
}

const DisplayData: FC<DisplayDataProps> = ({ label, placeholders }) => {
  const { t } = useTranslation("AccountPage");

  return (
    <LayoutGrid>
      <div style={{ gridArea: "label", display: "flex", flexDirection: "column" }}>
        <Typography variant={TypographyVariants.INPUT_LABEL}>{label}</Typography>
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

export const BillingAndPayments: FC = () => {
  const { t } = useTranslation("AccountPage");

  const testObject = {
    billingAddress: ["1 rue du trou aux Serpents", "57140 La Maxe", "Grand-Est, France"],
    cardInformation: ["GERARD Alexandre", "••••	•••• •••• 1234", "••/••", "•••"],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>
        {t("billing.content.display.billingAddress.title")}
      </Typography>
      <div
        style={{
          borderRadius: 36,
          border: "1px solid #848484",
          background: "#FAFAFA",
          width: 535,
          flexShrink: 0,
          margin: 10,
          padding: 20,
          display: "grid",
        }}
      >
        <DataSection>
          <DisplayData
            label={t("billing.content.display.billingAddress.title")}
            placeholders={[...testObject.billingAddress]}
          />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("billing.content.display.billingAddress.button")}</Button>
      </div>
      <Typography variant={TypographyVariants.SMALL_TITLE} style={{ marginTop: 40 }}>
        {t("billing.content.display.paymentMethod.title")}
      </Typography>
      <div
        style={{
          borderRadius: 36,
          border: "1px solid #848484",
          background: "#FAFAFA",
          width: 535,
          flexShrink: 0,
          margin: 10,
          padding: 20,
          display: "grid",
        }}
      >
        <DataSection>
          <DisplayData
            label={t("billing.content.display.paymentMethod.cardInformation.label")}
            placeholders={[...testObject.cardInformation]}
          />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("billing.content.display.paymentMethod.button")}</Button>
      </div>
    </div>
  );
};
