import React, { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { productImages } from "../../../../assets";
import { styles } from "../../../../styles";

const { Image, SectionTitle } = styles.productSection();

export const SecondSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <Fragment>
      <SectionTitle variant={TypographyVariants.SECTION_TITLE}>{t("product.subSections.2.content.1")}</SectionTitle>
      <Typography variant={TypographyVariants.PARAGRAPH}>{t("product.subSections.2.content.2")}</Typography>
      {
        // TODO CHANGE THIS
      }
      <Image src={productImages[2]} />
      <Typography variant={TypographyVariants.PARAGRAPH}>{t("product.subSections.2.content.3")}</Typography>
    </Fragment>
  );
};
