import React from "react";
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from "react-dom/client";

import { App } from "@/App";

import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
