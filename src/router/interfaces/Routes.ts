import { Page } from "./Page";

export type Routes = {
  [page in Page]: {
    name: Page;
    path: string;
    element: JSX.Element;
    sections?: string[];
  };
};
