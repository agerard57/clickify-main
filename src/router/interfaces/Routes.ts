import { AccountSubPages } from "@/accountPage";
import { Pages } from "./Pages";

type SubRoutes = {
  [SubPage in AccountSubPages]: {
    name: SubPage;
    path: string;
    element: JSX.Element;
  };
};

export type Routes = {
  [Page in Pages]: {
    name: Page;
    index?: boolean;
    path: string;
    element: JSX.Element;
    sections?: string[];
    subRoutes?: SubRoutes;
  };
};
