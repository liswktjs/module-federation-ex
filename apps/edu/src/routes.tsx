import React from "react";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider, EDU_ELEMENT_ID } from "@federation/shared";
import Home from "./pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type={EDU_ELEMENT_ID} />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Edu Error</div>,
    children: [{ index: true, element: <Home /> }],
  },
];
