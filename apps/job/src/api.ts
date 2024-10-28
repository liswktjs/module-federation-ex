import type { ApplyStatusType, JobType } from "./types";

const HOST_NAME = "http://localhost:4000";

export const getJobs = async (token: string): Promise<JobType[]> => {
  const res = await fetch(`${HOST_NAME}/jobs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const getApplyStatus = async (
  token: string
): Promise<ApplyStatusType> => {
  const res = await fetch(`${HOST_NAME}/apply-status`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
