import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  type: string;
}

const useAppEvent = ({ type }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (e: Event) => {
      const pathname = (e as CustomEvent<string>).detail;

      if (location.pathname === pathname) {
        return;
      }

      navigate(pathname);
    };
    window.addEventListener(`[app-shell] navigated`, shellNavigationHandler);

    return () => {
      window.removeEventListener(
        `[app-shell] navigated`,
        shellNavigationHandler
      );
    };
  }, [type, navigate, location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[${type}] navigated`, {
        detail: location.pathname,
      })
    );
  }, [location, type]);
};

export default useAppEvent;
