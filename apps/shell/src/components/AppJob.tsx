import { JOB_ELEMENT_ID } from "@federation/shared";
import { useShellEvent } from "@federation/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appJobBasename } from "../constants/prefix";
import inject from "job/injector";

const AppJob = () => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent({
    type: JOB_ELEMENT_ID,
    basename: appJobBasename,
  });

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appJobBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return (
    <div ref={wrapperRef} id={JOB_ELEMENT_ID}>
      App Job
    </div>
  );
};

export default AppJob;
