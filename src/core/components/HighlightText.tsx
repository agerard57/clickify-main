import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";
import React from "react";
import { TypographyVariants } from "@/theme";

export const HighlightText = ({
  text,
  textVariant = TypographyVariants.INHERIT,
}: {
  text: string;
  textVariant: TypographyVariants;
}) => {
  const theme = useTheme();

  const parts = text.split("\\");

  const RegularTypography = styled(Typography)`
    white-space: pre-line;
    text-align: center;
  `;

  const HighlightedTypography = styled(Typography)`
    background: ${theme.app.core.highlightedText};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <RegularTypography variant={textVariant}>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          return part;
        }
        return (
          <HighlightedTypography key={index} variant={textVariant}>
            {part}
          </HighlightedTypography>
        );
      })}
    </RegularTypography>
  );
};
