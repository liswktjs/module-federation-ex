import { Outlet } from "react-router-dom";
import useAppEvent from "../hooks/useAppEvent";

interface Props {
  type: string;
}

const AppRoutingManager = ({ type }: Props) => {
  useAppEvent({ type });

  return <Outlet />;
};

export default AppRoutingManager;
