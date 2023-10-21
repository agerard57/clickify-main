// Webpack fails here TODO: Find a brave person capable of fixing this mess
/* eslint-disable import/no-internal-modules */
import React from "react";
import { AuthPage } from "@/authPage";
import { LandingPage } from "@/landingPage/components/LandingPage";

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
    element: <AuthPage />,
  },
};
