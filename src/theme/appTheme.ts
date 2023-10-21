import { colorPalette } from "./colorPalette";

export const appTheme = {
  app: {
    core: {
      navbar: {
        background: colorPalette.white,
      },
      highlightedText: `linear-gradient(45deg, ${colorPalette.blueGradient.from} 100%, ${colorPalette.blueGradient.to} 100%)`,
    },
    auth: {
      switchButton: {
        textColor: colorPalette.white,
        signUp: `linear-gradient(135deg, ${colorPalette.blueGradient.from} 0%, ${colorPalette.blueGradient.to} 50%)`,
        login: `linear-gradient(270deg, ${colorPalette.blueGradient.from} 0%, ${colorPalette.blueGradient.to} 50%)`,
        unselected: colorPalette.lightGrey,
      },
      imageContainer: {
        background: `linear-gradient(265deg, ${colorPalette.blueGradient.from} 0%, ${colorPalette.blueGradient.to} 100%)`,
        imagePadding: colorPalette.white,
        textColor: colorPalette.white,
      },
    },
    landingPage: {
      icon: colorPalette.blue,
      sections: {
        about: {
          selected: colorPalette.primaryBlack,
          notSelected: {
            highlighted: colorPalette.lightGrey,
            notHighlighted: colorPalette.grey,
          },
        },
        price: {
          description: colorPalette.grey,
        },
        product: {
          selected: colorPalette.primaryBlack,
          notSelected: colorPalette.grey,
        },
        contact: {
          cardBackground: colorPalette.white,
          cardBorder: `1px solid ${colorPalette.lightGrey}`,
          iconColor: colorPalette.blue,
          boxShadow: "0px 0px 14px -3px rgba(0, 0, 0, 0.25)",
        },
      },
    },
  },
} as const;
