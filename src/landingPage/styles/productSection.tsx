import React, { ImgHTMLAttributes } from "react";

import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";

interface IsEvenProp {
  isEven: boolean;
}

export const productSection = () => {
  const Image = styled.img`
    height: 150px;
    padding: 20px 10px;
  `;

  const ParagraphImage = styled((props: IsEvenProp & ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />, {
    shouldForwardProp: (propName) => propName !== "isEven",
  })`
    height: 150px;
    order: ${({ isEven }) => (isEven ? 1 : 2)};
    padding-left: ${({ isEven }) => (isEven ? "0" : "50px")};
    padding-right: ${({ isEven }) => (isEven ? "50px" : "0")};
  `;

  const ParagraphText = styled((props: IsEvenProp & TypographyProps) => <Typography {...props} />, {
    shouldForwardProp: (propName) => propName !== "isEven",
  })`
    order: ${({ isEven }) => (isEven ? 2 : 1)};
  `;

  const ParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const SectionTitle = styled(Typography)`
    margin-bottom: 50px;
  `;

  return {
    Image,
    ParagraphImage,
    ParagraphText,
    ParagraphWrapper,
    SectionTitle,
  };
};
