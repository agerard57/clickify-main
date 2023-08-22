import { TypographyVariants, DefaultTypographyPropsVariants } from "../typings";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends DefaultTypographyPropsVariants {
    [TypographyVariants.INHERIT]: true;
    [TypographyVariants.TITLE]: true;
    [TypographyVariants.SUBTITLE]: true;
    [TypographyVariants.SECTION_TITLE]: true;
    [TypographyVariants.SENTENCE]: true;
    [TypographyVariants.PARAGRAPH]: true;
    [TypographyVariants.SMALL_TEXT]: true;
    [TypographyVariants.PARAGRAPH_TITLE]: true;
  }
}
