import styled from "@emotion/styled";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";
import { productImages } from "../../../../assets";
import { ParagraphWrapper } from "../../../../styles";

export const FirstSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  const Image = styled.img`
    height: 150px;
    padding: 20px 10px;
  `;

  return (
    <ParagraphWrapper>
      <Typography variant={TypographyVariants.PARAGRAPH}>{t("product.subSections.1.content.1")}</Typography>
      <Image src={productImages[0][1]} />
      <Typography variant={TypographyVariants.PARAGRAPH}>{t("product.subSections.1.content.2")}</Typography>
    </ParagraphWrapper>
  );
};
