import React from "react";
import ReactDOM from "react-dom/client";
import { Button, Icon } from "@federation/ui-kit";
import "@federation/ui-kit/index.css";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>example</Button>
    <Icon.Briefcase />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
