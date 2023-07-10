import { colorPalette } from "./colorPalette";

export const appTheme = {
  app: {
    core: {
      navbar: {
        background: colorPalette.white,
      },
      highlightedText: `linear-gradient(45deg, ${colorPalette.blueGradient.from} 100%, ${colorPalette.blueGradient.to} 100%)`,
    },
    landingPage: {
      icon: colorPalette.blue,
      sections: {
        product: {
          selected: colorPalette.primaryBlack,
          notSelected: colorPalette.grey,
        },
      },
    },
  },
} as const;
