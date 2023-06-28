import React from "react";
import { LandingPage } from "@/landingPage";
import { Page } from "./interfaces";

type Routes = {
  [page in Page]: {
    name: Page;
    path: string;
    element: JSX.Element;
    sections?: string[];
  };
};

export const routes: Routes = {
  [Page.LANDING_PAGE]: {
    name: Page.LANDING_PAGE,
    path: "/",
    element: <LandingPage />,
    sections: ["welcome", "product", "pricing", "about", "contact"],
  },
};
