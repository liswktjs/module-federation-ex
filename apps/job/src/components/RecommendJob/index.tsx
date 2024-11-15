import React from "react";
import * as S from "./index.styles";
import { useShellNavigate } from "@federation/shell-router";

interface Props {
  id: number;
  position: string;
  company: string;
}

const RecommendJob = ({ id, position, company }: Props) => {
  const navigate = useShellNavigate();

  const onRecommendJobClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <S.RecommendJobWrapper onClick={onRecommendJobClick}>
      <div className="job--recommend-job-position">{position}</div>
      <div className="job--recommend-job-company">{company}</div>
    </S.RecommendJobWrapper>
  );
};

export default RecommendJob;
