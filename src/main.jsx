import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RuleBuilderProvider } from "./features/rule-builder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RuleBuilderProvider>
      <App />
    </RuleBuilderProvider>
  </StrictMode>,
);
