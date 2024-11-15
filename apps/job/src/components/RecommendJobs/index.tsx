import React, { useEffect } from "react";
import { JobType } from "../../types";
import * as S from "./index.styles";
import RecommendJob from "../RecommendJob";

interface Props {
  jobs: JobType[];
  fetchJobs: () => Promise<void>;
}

const RecommendJobs = ({ jobs, fetchJobs }: Props) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <S.RecommendJobsWrapper>
      <div className="job--recommend-jobs-top">
        <div className="job--recommend-jobs-title">추천 채용 공고</div>
      </div>

      <div className="job--recommend-jobs-bottom">
        {jobs.map((job) => (
          <RecommendJob key={job.id} {...job} />
        ))}
      </div>
    </S.RecommendJobsWrapper>
  );
};

export default RecommendJobs;
