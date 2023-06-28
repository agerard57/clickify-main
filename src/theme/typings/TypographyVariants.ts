// eslint-disable-next-line import/no-internal-modules
import { Variant } from "@mui/material/styles/createTypography";

export type DefaultTypographyPropsVariants = {
  // Disable every default variant props
  [key in Variant]: false;
};

export enum TypographyVariants {
  INHERIT = "inherit",
  TITLE = "title",
  SUBTITLE = "subtitle",
}
