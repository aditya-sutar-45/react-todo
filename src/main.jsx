import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./css/index.css";
import AppRoutes from "./AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/react-todo/">
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
