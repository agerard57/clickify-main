import styled from "@emotion/styled";
import React, { FC, ImgHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Typography, TypographyProps } from "@mui/material";
import { TypographyVariants } from "@/theme";
import { ParagraphWrapper } from "../../../../styles";
import { productImages } from "../../../../assets";

interface IsEvenProp {
  isEven: boolean;
}

type ParagraphTextProps = IsEvenProp & TypographyProps;

const ParagraphText = styled((props: ParagraphTextProps) => <Typography {...props} />, {
  shouldForwardProp: (propName) => propName !== "isEven",
})`
  order: ${({ isEven }) => (isEven ? 2 : 1)};
`;

type ParagraphImageProps = IsEvenProp & ImgHTMLAttributes<HTMLImageElement>;

const ParagraphImage = styled((props: ParagraphImageProps) => <img {...props} />, {
  shouldForwardProp: (propName) => propName !== "isEven",
})`
  height: 150px;
  order: ${({ isEven }) => (isEven ? 1 : 2)};
  padding-left: ${({ isEven }) => (isEven ? "0" : "50px")};
  padding-right: ${({ isEven }) => (isEven ? "50px" : "0")};
`;

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
