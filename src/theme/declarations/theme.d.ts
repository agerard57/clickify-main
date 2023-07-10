// eslint-disable-next-line import/no-internal-modules
import { CSSProperties } from "react";
import { appTheme } from "../appTheme";
import { TypographyVariants, DefaultTypographyPropsVariants } from "../typings";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    [TypographyVariants.INHERIT]: CSSProperties;
    [TypographyVariants.TITLE]: CSSProperties;
    [TypographyVariants.SUBTITLE]: CSSProperties;
    [TypographyVariants.SENTENCE]: CSSProperties;
    [TypographyVariants.PARAGRAPH]: CSSProperties;
  }

  interface TypographyVariantsOptions {
    [TypographyVariants.INHERIT]?: CSSProperties;
    [TypographyVariants.TITLE]?: CSSProperties;
    [TypographyVariants.SUBTITLE]?: CSSProperties;
    [TypographyVariants.SENTENCE]?: CSSProperties;
    [TypographyVariants.PARAGRAPH]?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends DefaultTypographyPropsVariants {
    [TypographyVariants.INHERIT]: true;
    [TypographyVariants.TITLE]: true;
    [TypographyVariants.SUBTITLE]: true;
    [TypographyVariants.SENTENCE]: true;
    [TypographyVariants.PARAGRAPH]: true;
  }
}

declare module "@mui/material" {
  interface Theme {
    app: typeof appTheme.app;
  }

  interface ThemeOptions {
    app?: typeof appTheme.app;
  }
}
