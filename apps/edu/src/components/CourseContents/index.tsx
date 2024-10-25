import React from "react";
import { CourseContentsType } from "../../types";
import * as S from "./index.styles";

const CourseContents = ({ id, goals, summaries }: CourseContentsType) => {
  return (
    <S.CourseContentsWrapper>
      <div className="edu--course-contents-goal">
        <h3>강의 목표</h3>
        {goals.map((goal, index) => (
          <p key={index}>{goal}</p>
        ))}
      </div>
      <div className="edu--course-contents-summary">
        <h3>강의 요약</h3>
        {summaries.map((summary, index) => (
          <p key={index}>{summary}</p>
        ))}
      </div>
    </S.CourseContentsWrapper>
  );
};

export default CourseContents;
