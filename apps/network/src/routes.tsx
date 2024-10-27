import React from "react";
import { Auth0ClientProvider, NETWORK_ELEMENT_ID } from "@federation/shared";
import { AppRoutingManager } from "@federation/shell-router";
import { RouteObject } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import PageHome from "./pages/PageHome";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type={NETWORK_ELEMENT_ID} />
          </Layout>
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App network Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
