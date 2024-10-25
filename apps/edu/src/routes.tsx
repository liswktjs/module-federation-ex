import React from "react";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider, EDU_ELEMENT_ID } from "@federation/shared";
import Layout from "./components/Layout";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <Layout>
          <AppRoutingManager type={EDU_ELEMENT_ID} />
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Edu Error</div>,
    children: [
      { index: true, element: <CourseList /> },
      {
        path: ":id",
        element: <CourseDetail />,
      },
    ],
  },
];
