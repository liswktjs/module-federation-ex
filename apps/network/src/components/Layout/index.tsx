import React, { PropsWithChildren } from "react";
import { wrapper, left, center } from "./index.css";
import MyNetworkContainer from "../../containers/MyNetworkContainer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapper}>
      <div className={left}>
        <MyNetworkContainer />
      </div>
      <div className={center}>{children}</div>
    </div>
  );
};

export default Layout;
