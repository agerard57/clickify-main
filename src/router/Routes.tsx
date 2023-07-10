import React from "react";
import { LandingPage } from "@/landingPage";
import { Page, Routes } from "./interfaces";

export const routes: Routes = {
  [Page.LANDING_PAGE]: {
    name: Page.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
};
