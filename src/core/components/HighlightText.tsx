import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import { TypographyVariants } from "@/theme";

export const HighlightText = ({
  text,
  textVariant = TypographyVariants.INHERIT,
  highlightAllText = false,
}: {
  text: string;
  textVariant: TypographyVariants;
  highlightAllText?: boolean;
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
        const shouldHighlight = highlightAllText || index % 2 !== 0;
        const Component = shouldHighlight ? HighlightedTypography : Fragment;

        return (
          <Component key={index} variant={textVariant}>
            {part}
          </Component>
        );
      })}
    </RegularTypography>
  );
};
