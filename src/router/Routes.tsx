import React from "react";
// Webpack fails here
// eslint-disable-next-line import/no-internal-modules
import { LandingPage } from "@/landingPage/components/LandingPage";
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
    element: <div>Auth</div>,
  },
};
