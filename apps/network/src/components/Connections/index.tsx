import React, { useEffect } from "react";
import { ConnectionType } from "../../types";
import * as css from "./index.css";
import Connection from "../Connection";

interface Props {
  connections: ConnectionType[];
  fetchConnections: () => Promise<void>;
}

const Connections = ({ connections, fetchConnections }: Props) => {
  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  return (
    <div className={css.wrapper}>
      <div>서울 인천 지역에 사는 사람</div>
      <div className={css.connections}>
        {connections.map((connection) => (
          <Connection {...connection} />
        ))}
      </div>
    </div>
  );
};

export default Connections;
