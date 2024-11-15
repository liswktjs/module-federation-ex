import { useAuth0Client } from "@federation/shared";
import React, { useCallback, useState } from "react";
import { getConnections } from "../api";
import { ConnectionType } from "../types";
import RecommendConnections from "../components/RecommendConnections";

const RecommendConnectionsContainer = () => {
  const auth0Client = useAuth0Client();

  const [connections, setConnections] = useState<ConnectionType[]>([]);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (e) {
      alert(e);
    }
  }, [auth0Client, setConnections]);

  return (
    <RecommendConnections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default RecommendConnectionsContainer;
