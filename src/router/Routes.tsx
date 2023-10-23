import React from "react";

import { AuthPage } from "@/authPage";
import { LandingPage } from "@/landingPage/components/LandingPage";

import {
  AccountLayout,
  AccountSubPages,
  BillingAndPayments,
  CompanyInformation,
  CurrentPlan,
  SubscriptionHistory,
} from "../accountPage";
import { Pages, Routes } from "./interfaces";

export const routes: Routes = {
  [Pages.LANDING_PAGE]: {
    name: Pages.LANDING_PAGE,
    index: true,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
  [Pages.AUTH]: {
    name: Pages.AUTH,
    path: "/auth",
    element: <AuthPage />,
  },
  [Pages.ACCOUNT_PAGE]: {
    name: Pages.ACCOUNT_PAGE,
    path: "account",
    element: <AccountLayout />,
    subRoutes: {
      [AccountSubPages.COMPANY]: {
        name: AccountSubPages.COMPANY,
        path: "/account/company",
        element: <CompanyInformation />,
      },
      [AccountSubPages.PLAN]: {
        name: AccountSubPages.PLAN,
        path: "/account/plan",
        element: <CurrentPlan />,
      },
      [AccountSubPages.BILLING]: {
        name: AccountSubPages.BILLING,
        path: "/account/billing",
        element: <BillingAndPayments />,
      },
      [AccountSubPages.HISTORY]: {
        name: AccountSubPages.HISTORY,
        path: "/account/history",
        element: <SubscriptionHistory />,
      },
    },
  },
};
