import { useAuth0Client } from "@federation/shared";
import React, { useCallback, useState } from "react";
import { JobType } from "../../types";
import { getJobs } from "../../api";
import RecommendJobs from "../../components/RecommendJobs";

const RecommendJobsContainer = () => {
  const auth0Client = useAuth0Client();
  const [jobs, setJobs] = useState<JobType[]>([]);

  const fetchJobs = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const jobs = await getJobs(token);
      setJobs(jobs.slice(0, 3));
    } catch (e) {
      alert(e);
    }
  }, [setJobs, auth0Client]);

  return <RecommendJobs jobs={jobs} fetchJobs={fetchJobs} />;
};

export default RecommendJobsContainer;
