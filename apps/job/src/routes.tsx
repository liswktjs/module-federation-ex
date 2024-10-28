import React from "react";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider, JOB_ELEMENT_ID } from "@federation/shared";
import Layout from "./components/Layout";
import create from "./redux/create";
import { Provider } from "react-redux";
import PageList from "./pages/PageList";
import PageDetail from "./pages/PageDetail";

const store = create();

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type={JOB_ELEMENT_ID} />
          </Layout>
        </Auth0ClientProvider>
      </Provider>
    ),
    errorElement: <div>App job Error</div>,
    children: [
      { index: true, element: <PageList /> },
      {
        path: ":id",
        element: <PageDetail />,
      },
    ],
  },
];
