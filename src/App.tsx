import React, { FC, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";

import { ConstantsProvider } from "@/constants";
import { i18n } from "@/i18n";
import { LoadingScreen } from "@/loadingScreen";
import { Router } from "@/router/Router";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";

export const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <ConstantsProvider>
      <ThemeProvider theme={theme}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ marginTop: "7vh" }}
          toastOptions={{
            duration: 5000,
          }}
        />
        <Suspense fallback={<LoadingScreen />}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </ConstantsProvider>
  </I18nextProvider>
);
