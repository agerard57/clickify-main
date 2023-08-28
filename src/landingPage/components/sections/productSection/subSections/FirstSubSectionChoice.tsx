import React, { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Typography } from "@mui/material";

import { productImages } from "../../../../assets";
import { styles } from "../../../../styles";

const { Image } = styles.productSection();

export const FirstSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <Fragment>
      <Typography variant={TypographyVariants.SECTION_TITLE}>{t("product.subSections.1.content.1")}</Typography>
      {/* TODO Gotta change this */}
      <Image src={productImages[0][1]} />
      <Typography variant={TypographyVariants.PARAGRAPH}>{t("product.subSections.1.content.2")}</Typography>
    </Fragment>
  );
};
