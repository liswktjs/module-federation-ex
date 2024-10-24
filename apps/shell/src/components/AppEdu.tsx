import { EDU_ELEMENT_ID } from "@federation/shared";
import { useShellEvent } from "@federation/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import inject from "edu/injector";
import { appEduBasename } from "../constants/prefix";

const AppEdu = () => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent({
    type: EDU_ELEMENT_ID,
    basename: appEduBasename,
  });

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appEduBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return (
    <div ref={wrapperRef} id={EDU_ELEMENT_ID}>
      AppEdu
    </div>
  );
};

export default AppEdu;
