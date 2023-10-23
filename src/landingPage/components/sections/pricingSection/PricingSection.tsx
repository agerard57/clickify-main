import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useConstants } from "@/constants";
import { PriceBox } from "@/core";
import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

export const PricingSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useConstants();

  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>{t("pricing.title")}</Typography>
      <div style={{ paddingTop: 20 }}>
        <Typography variant={TypographyVariants.SUBTITLE}>{t("pricing.subTitle")}</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", margin: "50px 0", width: "100%", gap: 20 }}>
        {appConstants.core.priceBox.plans.map((plan, planIndex) => (
          <PriceBox plan={plan} key={planIndex} />
        ))}
      </div>
    </>
  );
};
