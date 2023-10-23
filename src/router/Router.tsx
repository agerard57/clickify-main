import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/core/components/Layout";

import { routes } from "./Routes";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route key={route.name} path={`${route.path}`} element={route.element}>
              {route.subRoutes &&
                Object.values(route.subRoutes).map((subRoute) => (
                  <Route key={subRoute.name} path={subRoute.path} element={subRoute.element} />
                ))}
            </Route>
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
