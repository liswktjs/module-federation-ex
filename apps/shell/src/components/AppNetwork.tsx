import { NETWORK_ELEMENT_ID } from "@federation/shared";
import { useShellEvent } from "@federation/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appNetworkBasename } from "../constants/prefix";
import inject from "network/injector";

const AppNetwork = () => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent({
    type: NETWORK_ELEMENT_ID,
    basename: appNetworkBasename,
  });

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appNetworkBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return (
    <div ref={wrapperRef} id={NETWORK_ELEMENT_ID}>
      App Network
    </div>
  );
};

export default AppNetwork;
