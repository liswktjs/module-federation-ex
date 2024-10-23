import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { appPostingBasename } from "./constants/prefix";
import Layout from "./components/Layout";
import Auth0ProviderWithNavigator from "./components/Auth0ProviderWithNavigator";

const AppPostingLazy = React.lazy(() => import("./components/AppPosting"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
    children: [
      { index: true, element: <Navigate to={`${appPostingBasename}`} /> },
      {
        path: `${appPostingBasename}/*`,
        element: (
          <Suspense fallback={<div>Loading posting</div>}>
            <AppPostingLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
