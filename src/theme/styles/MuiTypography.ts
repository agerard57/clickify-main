import { colorPalette } from "../colorPalette";
import { TypographyVariants } from "../typings";

export const MuiTypography = {
  styleOverrides: {
    root: {
      fontFamily: "Lexend",
      fontSize: 14,
      fontWeightLight: 600,
      color: colorPalette.primaryBlack,
    },
    [TypographyVariants.TITLE]: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "1px",
    },
    [TypographyVariants.SUBTITLE]: {
      fontSize: 20,
      fontWeight: 400,
    },
    [TypographyVariants.SECTION_TITLE]: {
      fontSize: 16,
      fontWeight: 700,
    },
    [TypographyVariants.SENTENCE]: {
      fontSize: 16,
      fontWeight: 500,
    },
    [TypographyVariants.PARAGRAPH]: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    },
    [TypographyVariants.SMALL_TEXT]: {
      fontSize: 11,
      fontWeight: 400,
    },
    [TypographyVariants.PARAGRAPH_TITLE]: {
      fontSize: 13,
      fontWeight: 700,
    },
  },
};
