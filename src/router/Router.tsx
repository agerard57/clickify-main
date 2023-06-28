import React, { FC, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConstantsContext } from "@/constants";
import { Layout } from "@/core";

export const Router: FC = () => {
  const appConstants = useContext(ConstantsContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.values(appConstants.routes).map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
