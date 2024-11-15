import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useShellNavigateListener = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const shellNavigateListener = (event: Event) => {
      const pathname = (event as CustomEvent).detail;

      navigate(pathname);
    };

    window.addEventListener(`[shell] navigate`, shellNavigateListener);

    return () => {
      window.removeEventListener(`[shell] navigate`, shellNavigateListener);
    };
  }, [navigate]);

  return <div>useShellNavigateListener</div>;
};

export default useShellNavigateListener;
