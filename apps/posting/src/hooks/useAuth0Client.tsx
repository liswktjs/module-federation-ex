import { useContext } from "react";
import { Auth0ClientContext } from "../provider/Auth0ClientProvider";

const useAuth0Client = () => {
  const auth0Client = useContext(Auth0ClientContext);

  if (!auth0Client) {
    throw new Error("useAuth0Client must be used with in Auth0ClientProvider");
  }
  return auth0Client;
};

export default useAuth0Client;
