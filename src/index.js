import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./contexts/themeContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
