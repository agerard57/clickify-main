import { AccountSubPages } from "@/accountPage";
import { AboutSubSections, Cards, ContactCategory } from "@/landingPage";
import { routes } from "@/router";
import { MainSupportTopics, PlanTypes } from "@clickify/clickify-common";
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

export const appConstants = {
  routes,
  accountPage: {
    subPages: [AccountSubPages.COMPANY, AccountSubPages.PLAN, AccountSubPages.BILLING, AccountSubPages.HISTORY],
    subscriptionHistoryFields: ["plan", "since", "expired", "price", "export"],
  },
  landingPage: {
    sections: {
      about: [AboutSubSections.STORY, AboutSubSections.MISSION, AboutSubSections.TEAM],
      pricing: {
        plans: [PlanTypes.BASIC, PlanTypes.CLICKIFY, PlanTypes.PREMIUM],
        [PlanTypes.BASIC]: {
          features: [1, 2, 3],
          isPopularChoice: false,
          price: 37,
          includePreviousTiersFeatures: false,
          icons: [faPercent, faShoppingCart, faUsers],
        },
        [PlanTypes.CLICKIFY]: {
          features: [1, 2, 3, 4, 5],
          isPopularChoice: true,
          price: 106,
          includePreviousTiersFeatures: true,
          icons: [faPercent, faShoppingCart, faUsers, faChartBar, faStore],
        },
        [PlanTypes.PREMIUM]: {
          features: [1, 2, 3, 4],
          isPopularChoice: false,
          price: 309,
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
