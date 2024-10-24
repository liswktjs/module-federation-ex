import React from "react";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { POSTING_ELEMENT_ID, Auth0ClientProvider } from "@federation/shared";
import Home from "./pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type={POSTING_ELEMENT_ID} />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Posting Error</div>,
    children: [{ index: true, element: <Home /> }],
  },
];
