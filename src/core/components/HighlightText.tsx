import React, { FC, Fragment } from "react";

import { TypographyVariants } from "@/theme";
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";

interface HighlightTextProps {
  text: string;
  textVariant: TypographyVariants;
  highlightAllText?: boolean;
  overrideStyles?: { nonHighlighted?: SerializedStyles; highlighted?: SerializedStyles };
}

export const HighlightText: FC<HighlightTextProps> = ({
  text,
  textVariant = TypographyVariants.INHERIT,
  highlightAllText = false,
  overrideStyles,
}) => {
  const theme = useTheme();

  const parts = text.split("\\");

  const RegularTypography = styled(Typography)`
    ${overrideStyles?.nonHighlighted ?? ""}

    white-space: pre-line;
    text-align: center;
  `;

  const HighlightedTypography = styled(Typography)`
    background: ${theme.app.core.highlightedText};
    ${overrideStyles?.highlighted ?? ""}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <RegularTypography variant={textVariant}>
      {parts.map((part, index) => {
        const shouldHighlight = highlightAllText || index % 2 !== 0;

        return shouldHighlight ? (
          <HighlightedTypography key={index} variant={textVariant}>
            {part}
          </HighlightedTypography>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        );
      })}
    </RegularTypography>
  );
};
