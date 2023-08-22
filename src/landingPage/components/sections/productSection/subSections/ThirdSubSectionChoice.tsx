import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";

import { productImages } from "../../../../assets";
import { styles } from "../../../../styles";

export const ThirdSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  const { ParagraphImage, ParagraphText, ParagraphWrapper, SectionTitle } = styles.productSection();

  return (
    <>
      <SectionTitle variant={TypographyVariants.SECTION_TITLE}>{t("product.subSections.3.content.1")}</SectionTitle>
      {([1, 2] as const).map((item) => {
        const isEven = item % 2 === 0;

        return (
          <ParagraphWrapper key={item}>
            <ParagraphText variant={TypographyVariants.PARAGRAPH} isEven={isEven}>
              {t(`product.subSections.3.content.${item + 1}`)}
            </ParagraphText>
            <ParagraphImage src={productImages[3][item]} isEven={isEven} />
          </ParagraphWrapper>
        );
      })}
    </>
  );
};
