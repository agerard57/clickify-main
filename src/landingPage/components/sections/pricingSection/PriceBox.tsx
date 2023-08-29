import React, { DetailedHTMLProps, FC, HTMLAttributes, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { ConstantsContext } from "@/constants";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, Typography } from "@mui/material";

import { PricePlans } from "../../../typings";

interface PriceBoxProps {
  plan: PricePlans;
}

export const PriceBox: FC<PriceBoxProps> = ({ plan }) => {
  const { t } = useTranslation("LandingPage");
  const appConstants = useContext(ConstantsContext);

  interface BoxProps {
    isPopularChoice: boolean;
    isHovered: boolean;
  }

  const Box = styled(
    (props: BoxProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props} />,
    {
      shouldForwardProp: (propName) => propName !== "isPopularChoice" && propName !== "isHovered",
    },
  )`
    display: flex;
    user-select: none;
    cursor: pointer;
    flex-direction: column;
    border-radius: 14px;
    width: 28vw;
    height: ${({ isPopularChoice }) => (isPopularChoice ? "32vh" : "28vh")};
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.25);
    padding: 20px 15px;
    border: 1px solid #b1b1b1;
    background: #f6fcff;

    ${({ isPopularChoice }) =>
      isPopularChoice &&
      css`
        border: 1px solid #a7bfff;
        background: #eef9ff;
      `}

    ${({ isHovered }) =>
      isHovered &&
      css`
        border: 1px solid #2a2a2a;
      `}
  `;

  const SaleBadge = styled.div`
    width: 80%;
    text-align: center;
    padding-top: 16px;
    border-radius: 4px;
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Price = styled.div`
    display: flex;
    align-items: flex-end;
  `;

  const Content = styled(Typography)`
    color: #7a7a7a;
    padding-top: 10px;
  `;

  const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: #b1b1b1;
    margin: 10px 0;
  `;

  const ListElement = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 6px;
    gap: 10px;
  `;

  const ArrowElement = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 6px;
    gap: 10px;
  `;

  const PriceBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const features = appConstants.landingPage.sections.pricing;

  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const handleBoxMouseEnter = () => {
    setHoveredBox(plan);
  };

  const handleBoxMouseLeave = () => {
    setHoveredBox(null);
  };

  const currentPlan = features[plan];

  return (
    <PriceBoxContainer key={plan}>
      <Box
        isPopularChoice={currentPlan.isPopularChoice}
        isHovered={hoveredBox === plan}
        onMouseEnter={handleBoxMouseEnter}
        onMouseLeave={handleBoxMouseLeave}
      >
        <Header>
          <Typography variant={TypographyVariants.SECTION_TITLE}>{t(`pricing.plans.${plan}.title`)}</Typography>
          <Price>
            <Typography variant={TypographyVariants.SECTION_TITLE}>
              {t("pricing.planComponents.currency", { price: currentPlan.price })}
            </Typography>
            <Typography variant={TypographyVariants.SMALL_TEXT}>{t("pricing.planComponents.month")}</Typography>
          </Price>
        </Header>
        <Content variant={TypographyVariants.SMALL_TEXT}>{t(`pricing.plans.${plan}.description`)}</Content>
        <Separator />
        <Typography variant={TypographyVariants.PARAGRAPH_TITLE}>{t("pricing.planComponents.features")}</Typography>
        <>
          {currentPlan.features.map((feature) => (
            <ListElement key={feature}>
              <FontAwesomeIcon icon={currentPlan.icons[feature - 1]} />
              <Typography variant={TypographyVariants.SMALL_TEXT}>
                {t(`pricing.plans.${plan}.features.${feature}`)}
              </Typography>
            </ListElement>
          ))}
          {currentPlan.includePreviousTiersFeatures && (
            <ArrowElement>
              <FontAwesomeIcon icon={faArrowLeft} />
              <Typography variant={TypographyVariants.SMALL_TEXT}>{t("pricing.planComponents.more")}</Typography>
            </ArrowElement>
          )}
        </>
      </Box>
      {currentPlan.isPopularChoice && (
        <SaleBadge>
          <Typography>Popular choice</Typography>
        </SaleBadge>
      )}
    </PriceBoxContainer>
  );
};
