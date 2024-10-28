import React from "react";
import { JobType } from "../../types";
import * as S from "./index.styles";
import IconDefault from "../../assets/IconDefault";
import { useNavigate } from "react-router-dom";

const JobListItem = ({ id, company, position, location }: JobType) => {
  const navigate = useNavigate();
  const onJobItemClick = () => {
    navigate(`${id}`);
  };

  return (
    <S.JobListItemWrapper onClick={onJobItemClick}>
      <div className="job--job-list-item-left">
        <IconDefault />
      </div>
      <div className="job--job-list-item-right">
        <div className="job--job-list-item-right-position">{position}</div>
        <div className="job--job-list-item-right-company">{company}</div>
        <div className="job--job-list-item-right-location">{location}</div>
      </div>
    </S.JobListItemWrapper>
  );
};

export default JobListItem;
