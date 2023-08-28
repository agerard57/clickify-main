import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";

import { productImages } from "../../../../assets";
import { styles } from "../../../../styles";

const { ParagraphImage, ParagraphText, ParagraphWrapper } = styles.productSection();

export const UnselectedSubSectionChoice: FC = () => {
  const { t } = useTranslation("LandingPage");

  return (
    <>
      {([1, 2, 3] as const).map((item) => {
        const isEven = item % 2 === 0;

        return (
          <ParagraphWrapper key={item}>
            <ParagraphText variant={TypographyVariants.PARAGRAPH} isEven={isEven}>
              {t(`product.subSections.0.content.${item}`)}
            </ParagraphText>
            <ParagraphImage src={productImages[0][item]} isEven={isEven} />
          </ParagraphWrapper>
        );
      })}
    </>
  );
};
