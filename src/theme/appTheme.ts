import { colorPalette } from "./colorPalette";

export const appTheme = {
  app: {
    core: {
      highlightedText: `linear-gradient(45deg, ${colorPalette.blueGradient.from} 100%, ${colorPalette.blueGradient.to} 100%)`,
    },
    landingPage: {
      icon: colorPalette.blue,
    },
  },
} as const;
