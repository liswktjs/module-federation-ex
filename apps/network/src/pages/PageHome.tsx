import React from "react";
import ManageConnection from "../components/ManageConnection";
import ConnectionsContainer from "../containers/ConnectionsContainer";

const PageHome = () => {
  return (
    <>
      <ManageConnection />
      <ConnectionsContainer />
    </>
  );
};

export default PageHome;
