import React, { useEffect } from "react";
import { ConnectionType } from "../../types";
import "./index.css";
import Connection from "../Connection";

interface Props {
  connections: ConnectionType[];
  fetchConnections: () => Promise<void>;
}

const RecommendConnections = ({ connections, fetchConnections }: Props) => {
  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  return (
    <div className="fragment-recommend-connections--recommend-connections">
      <div className="fragment-recommend-connections--recommend-connections-top">
        <span className="fragment-recommend-connections--recommend-connections-top-title">
          일촌 추천
        </span>
      </div>
      <div className="fragment-recommend-connections--recommend-connections-bottom">
        {connections.map((connection, index) => (
          <Connection key={index} {...connection} />
        ))}
      </div>
    </div>
  );
};

export default RecommendConnections;
