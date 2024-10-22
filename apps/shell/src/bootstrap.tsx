import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@federation/ui-kit/index.css";
import { ROOT_ELEMENT_ID } from "@federation/shared";

createRoot(document.getElementById(ROOT_ELEMENT_ID)!).render(<App />);
