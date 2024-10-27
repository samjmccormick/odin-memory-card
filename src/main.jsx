import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGrid from "./components/layout";
import Header from "./components/header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <CardGrid />
  </StrictMode>
);
