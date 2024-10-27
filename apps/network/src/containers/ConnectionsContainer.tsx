import { useAuth0Client } from "@federation/shared";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { connectionsAtom } from "../atom";
import { getConnections } from "../api";
import Connections from "../components/Connections";

const ConnectionsContainer = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useRecoilState(connectionsAtom);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (e) {
      alert(e);
    }
  }, [setConnections, auth0Client]);

  return (
    <Connections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default ConnectionsContainer;
