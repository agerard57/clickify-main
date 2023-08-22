import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { PriceBox } from "./PriceBox";

export const PricingSection: FC = () => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useContext(ConstantsContext);

  const BoxesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0;
    width: 100%;
    gap: 20px;
  `;

  const SubTitleWrapper = styled.div`
    padding-top: 20px;
  `;

  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>{t("pricing.title")}</Typography>
      <SubTitleWrapper>
        <Typography variant={TypographyVariants.SUBTITLE}>{t("pricing.subTitle")}</Typography>
      </SubTitleWrapper>
      <BoxesContainer>
        {appConstants.landingPage.sections.pricing.plans.map((plan, planIndex) => (
          <PriceBox plan={plan} key={planIndex} />
        ))}
      </BoxesContainer>
    </>
  );
};
