import React from "react";
import { faChartBar, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faFileLines,
  faPercent,
  faShoppingCart,
  faStore,
  faUsers,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { AboutSubSections, Cards, ContactCategory, PricePlans } from "@/landingPage";
import { routes } from "@/router";
import { MainSupportTopics } from "@clickify/clickify-common";

export const appConstants = {
  routes,
  landingPage: {
    sections: {
      about: [AboutSubSections.STORY, AboutSubSections.MISSION, AboutSubSections.TEAM],
      pricing: {
        plans: [PricePlans.BASIC, PricePlans.CLICKIFY, PricePlans.PREMIUM],
        basic: {
          features: [1, 2, 3],
          isPopularChoice: false,
          price: 25,
          includePreviousTiersFeatures: false,
          icons: [faPercent, faShoppingCart, faUsers],
        },
        clickify: {
          features: [1, 2, 3, 4, 5],
          isPopularChoice: true,
          price: 75,
          includePreviousTiersFeatures: true,
          icons: [faPercent, faShoppingCart, faUsers, faChartBar, faStore],
        },
        premium: {
          features: [1, 2, 3, 4],
          isPopularChoice: false,
          price: 275,
          includePreviousTiersFeatures: true,
          icons: [faPercent, faShoppingCart, faUsers, faComment],
        },
      },
      contact: {
        categories: [
          {
            title: "sales",
            cards: [{ title: Cards.DEMO, icon: faVideoCamera }],
          },
          {
            title: "support",
            cards: [
              { title: Cards.SUPPORT, icon: faEnvelope },
              { title: Cards.DOCUMENTATION, icon: faFileLines },
            ],
          },
        ] as ContactCategory[],
        modal: {
          demo: {
            topics: [
              MainSupportTopics.ORDER,
              MainSupportTopics.RETURNS_REFUNDS,
              MainSupportTopics.TECHNICAL_ISSUES,
              MainSupportTopics.PAYMENTS,
              MainSupportTopics.CUSTOMER_SERVICE,
              MainSupportTopics.SECURITY,
              MainSupportTopics.FEEDBACK,
              MainSupportTopics.OTHER,
            ] as MainSupportTopics[],
          },
        },
      },
    },
  },
} as const;
