import React from "react";
import { AuthPage } from "@/authPage";

// Webpack fails here TODO: Find a brave person capable of fixing this mess
// See in @/accountPage/components/currentPlan/CurrentPlan.tsx:  ☞ 747d4797-2eda-4561-b803-734023a18d97
// eslint-disable-next-line import/no-internal-modules
import { LandingPage } from "@/landingPage/components/LandingPage";

import { Pages, Routes } from "./interfaces";
import { AccountLayout, AccountSubPages, CompanyInformation, CurrentPlan } from "../accountPage";

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
        element: <CompanyInformation />,
      },
      [AccountSubPages.HISTORY]: {
        name: AccountSubPages.HISTORY,
        path: "/account/history",
        element: <CompanyInformation />,
      },
    },
  },
};
