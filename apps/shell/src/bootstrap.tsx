import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ROOT_ELEMENT_ID } from "@federation/shared";
import "@federation/ui-kit/index.css";
import "./index.css";

createRoot(document.getElementById(ROOT_ELEMENT_ID)!).render(<App />);
