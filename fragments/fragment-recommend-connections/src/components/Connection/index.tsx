import React from "react";
import { Button } from "@federation/ui-kit";
import { ConnectionType } from "../../types";
import "./index.css";

const Connection = ({ name }: ConnectionType) => {
  return (
    <div className="fragment-recommend-connections--connection">
      <div className="fragment-recommend-connections--connection-name">
        {name}
      </div>
      <div>
        <Button>1촌 맺기</Button>
      </div>
    </div>
  );
};

export default Connection;
