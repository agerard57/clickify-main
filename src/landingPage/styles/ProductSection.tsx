import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";
import React, { ImgHTMLAttributes } from "react";

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IsEvenProp {
  isEven: boolean;
}

type ParagraphTextProps = IsEvenProp & TypographyProps;

export const ParagraphText = styled((props: ParagraphTextProps) => <Typography {...props} />, {
  shouldForwardProp: (propName) => propName !== "isEven",
})`
  order: ${({ isEven }) => (isEven ? 2 : 1)};
`;

type ParagraphImageProps = IsEvenProp & ImgHTMLAttributes<HTMLImageElement>;

export const ParagraphImage = styled((props: ParagraphImageProps) => <img {...props} />, {
  shouldForwardProp: (propName) => propName !== "isEven",
})`
  height: 150px;
  order: ${({ isEven }) => (isEven ? 1 : 2)};
  padding-left: ${({ isEven }) => (isEven ? "0" : "50px")};
  padding-right: ${({ isEven }) => (isEven ? "50px" : "0")};
`;
