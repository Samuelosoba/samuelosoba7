import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ProjectCard from "./component/ProjectCard.tsx";
import Portfolio from "./Portfolio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
