import { Auth0Client } from "@auth0/auth0-spa-js";
import { createContext, PropsWithChildren } from "react";

export const Auth0ClientContext = createContext<Auth0Client | null>(null);

const Auth0ClientProvider = ({ children }: PropsWithChildren) => {
  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN as string;
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID as string;
  const redirectUrl = import.meta.env
    .VITE_REACT_APP_AUTH0_CALLBACK_URL as string;

  const auth0Client = new Auth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri: redirectUrl,
    },
  });

  return (
    <Auth0ClientContext.Provider value={auth0Client}>
      {children}
    </Auth0ClientContext.Provider>
  );
};

export default Auth0ClientProvider;
