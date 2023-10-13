import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";
import renderer from "react-test-renderer";

import { WelcomeSection } from "../components";

describe("Landing page - Welcome section", () => {
  test("should render welcome section properly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <WelcomeSection />
        </ThemeProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
