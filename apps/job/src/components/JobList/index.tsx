import React, { useEffect } from "react";
import { JobType } from "../../types";
import * as S from "./index.styles";
import JobListItem from "../JobListItem";

interface Props {
  jobs: JobType[] | null;
  fetchJobs: () => Promise<void>;
}

const JobList = ({ jobs, fetchJobs }: Props) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (!jobs) {
    return;
  }

  const {} = jobs;
  return (
    <S.JobListWrapper>
      <div className="job--job-list-top">
        <div className="job--job-list-top-title">
          회원님을 위한 맞춤 채용 공고
        </div>
        <div className="job--job-list-top-subtitle">
          회원님의 프로필과 검색 기록을 참고함
        </div>
      </div>
      <div>
        {jobs.map((job) => (
          <JobListItem key={job.id} {...job} />
        ))}
      </div>
    </S.JobListWrapper>
  );
};

export default JobList;
