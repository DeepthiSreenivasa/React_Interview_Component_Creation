import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouterProvider from "./RouterProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </StrictMode>
);
