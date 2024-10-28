import React, { useCallback } from "react";
import ApplyStatus from "../components/ApplyStatus";
import { useAuth0Client } from "@federation/shared";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/applyStatus";
import { getApplyStatus } from "../api";

const ApplyStatusContainer = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();
  const applyStatus = useSelector((state: RootState) => state.applyStatus.data);

  const fetchApplyStatus = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getApplyStatus(token);
      dispatch(done(applyStatus));
    } catch (e) {
      dispatch(fail(e as Error));
    }
  }, [auth0Client, dispatch]);

  return (
    <ApplyStatus
      applyStatus={applyStatus}
      fetchApplyStatus={fetchApplyStatus}
    />
  );
};

export default ApplyStatusContainer;
