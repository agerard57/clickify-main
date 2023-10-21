import React, { DetailedHTMLProps, FC, HTMLAttributes, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TypographyVariants } from "@/theme";
import { PlanTypes } from "@clickify/clickify-common";
import styled from "@emotion/styled";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, Divider, Typography, useTheme } from "@mui/material";

interface BoxProps {
  isStatic: boolean;
  isPopularChoice: boolean;
  isHovered: boolean;
}

const Box = styled(
  (props: BoxProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props} />,
  {
    shouldForwardProp: (propName) =>
      propName !== "isStatic" && propName !== "isPopularChoice" && propName !== "isHovered",
  },
)`
  display: flex;
  user-select: none;
  cursor: pointer;
  cursor: ${({ isStatic }) => (isStatic ? "initial" : "pointer")};
  flex-direction: column;
  border-radius: 14px;
  width: 28vw;
  height: ${({ isStatic, isPopularChoice }) => (!isStatic && isPopularChoice ? "32vh" : "28vh")};
  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.25);
  padding: 20px 15px;
  border: 1px solid #b1b1b1;
  background: #f6fcff;

  ${({ isStatic, isPopularChoice }) =>
    !isStatic &&
    isPopularChoice &&
    css`
      border: 1px solid #a7bfff;
      background: #eef9ff;
    `}

  ${({ isStatic, isHovered }) =>
    !isStatic &&
    isHovered &&
    css`
      border: 1px solid #2a2a2a;
    `}
`;

interface PriceBoxProps {
  plan: PlanTypes.BASIC | PlanTypes.CLICKIFY | PlanTypes.PREMIUM;
  isStatic?: boolean;
}

export const PriceBox: FC<PriceBoxProps> = ({ plan, isStatic = false }) => {
  const { t } = useTranslation("Core");
  const appConstants = useContext(ConstantsContext);
  const theme = useTheme();

  const features = appConstants.core.pricing;

  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const handleBoxMouseEnter = () => {
    setHoveredBox(plan);
  };

  const handleBoxMouseLeave = () => {
    setHoveredBox(null);
  };

  const currentPlan = features[plan];

  return (
    <div key={plan} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        isPopularChoice={currentPlan.isPopularChoice}
        isHovered={hoveredBox === plan}
        onMouseEnter={handleBoxMouseEnter}
        onMouseLeave={handleBoxMouseLeave}
        isStatic={isStatic}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={TypographyVariants.SECTION_TITLE}>{t(`priceBox.plans.${plan}.title`)}</Typography>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant={TypographyVariants.SECTION_TITLE}>
              {t("priceBox.planComponents.currency", { price: currentPlan.price })}
            </Typography>
            <Typography variant={TypographyVariants.SMALL_TEXT}>{t("priceBox.planComponents.month")}</Typography>
          </div>
        </div>
        <Typography
          variant={TypographyVariants.SMALL_TEXT}
          style={{ color: theme.app.landingPage.sections.price.description, paddingTop: 10 }}
        >
          {t(`priceBox.plans.${plan}.description`)}
        </Typography>
        <Divider flexItem style={{ margin: "10px 0" }} />
        <Typography variant={TypographyVariants.PARAGRAPH_TITLE}>{t("priceBox.planComponents.features")}</Typography>
        <>
          {currentPlan.features.map((feature) => (
            <div key={feature} style={{ display: "flex", alignItems: "center", margin: "5px 6px", gap: 10 }}>
              <FontAwesomeIcon icon={currentPlan.icons[feature - 1]} />
              <Typography variant={TypographyVariants.SMALL_TEXT}>
                {t(`priceBox.plans.${plan}.features.${feature}`)}
              </Typography>
            </div>
          ))}
          {currentPlan.includePreviousTiersFeatures && (
            <div style={{ display: "flex", alignItems: "center", margin: "15px 6px", gap: 10 }}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <Typography variant={TypographyVariants.SMALL_TEXT}>{t("priceBox.planComponents.more")}</Typography>
            </div>
          )}
        </>
      </Box>
      {!isStatic && currentPlan.isPopularChoice && (
        <div style={{ width: "80%", textAlign: "center", paddingTop: 16, borderRadius: 4 }}>
          <Typography>{t("priceBox.planComponents.popular")}</Typography>
        </div>
      )}
    </div>
  );
};
