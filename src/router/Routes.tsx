// Webpack fails here
/* eslint-disable import/no-internal-modules */
import React from "react";
import { LandingPage } from "@/landingPage/components/LandingPage";
import { AuthPage } from "@/authPage/components/AuthPage";
import { Page, Routes } from "./interfaces";

export const routes: Routes = {
  [Page.LANDING_PAGE]: {
    name: Page.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
  [Page.AUTH]: {
    name: Page.AUTH,
    path: "/auth",
    element: <AuthPage />,
  },
};
