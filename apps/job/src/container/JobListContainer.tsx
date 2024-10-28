import { useAuth0Client } from "@federation/shared";
import React, { useCallback } from "react";
import JobList from "../components/JobList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/create";
import { start, done, fail } from "../redux/modules/jobs";
import { getJobs } from "../api";

const JobListContainer = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();
  const jobs = useSelector((state: RootState) => state.jobs.data);

  const fetchJobsList = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const jobs = await getJobs(token);
      dispatch(done(jobs));
    } catch (e) {
      dispatch(fail(e));
    }
  }, [auth0Client, dispatch]);

  return <JobList jobs={jobs} fetchJobs={fetchJobsList} />;
};

export default JobListContainer;
