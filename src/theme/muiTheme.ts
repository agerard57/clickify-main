import { colorPalette } from "./colorPalette";

export const muiTheme = {
  palette: {
    primary: {
      main: "#620000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Lexend",
          fontSize: 14,
          fontWeightLight: 600,
          color: colorPalette.primaryBlack,
        },
        title: {
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "1px",
        },
        subtitle: {
          fontSize: 16,
          fontWeight: 500,
        },
      },
    },
  },
} as const;
