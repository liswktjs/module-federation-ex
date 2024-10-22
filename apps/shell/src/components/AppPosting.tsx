import { useShellEvent } from "@federation/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appPostingBasename } from "../constants/prefix";
import inject from "posting/injector";
import { POSTING_ELEMENT_ID } from "@federation/shared";

const AppPosting = () => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent({
    type: POSTING_ELEMENT_ID,
    basename: appPostingBasename,
  });

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appPostingBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return (
    <div ref={wrapperRef} id={POSTING_ELEMENT_ID}>
      AppPosting
    </div>
  );
};

export default AppPosting;
