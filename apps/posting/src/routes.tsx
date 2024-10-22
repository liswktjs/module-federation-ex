import React from "react";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { POSTING_ELEMENT_ID } from "@federation/shared";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type={POSTING_ELEMENT_ID} />,
    errorElement: <div>App Posting Error</div>,
    children: [
      { index: true, element: <div>App Posting Root</div> },
      {
        path: "1",
        element: <div>App Posting Page 1</div>,
      },
    ],
  },
];
