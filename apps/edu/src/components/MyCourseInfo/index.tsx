import React from "react";
import { UserType } from "../../types";
import * as S from "./index.styles";

interface Props {
  user: null | UserType;
}

const MyCourseInfo = ({ user }: Props) => {
  if (user === null) {
    return null;
  }

  const { courses } = user;

  return (
    <S.MyCourseInfoWrapper>
      <div className="edu--my-course-info-top">
        <span className="edu--my-course-info-top-title">나의 학습 현황</span>
      </div>
      <div className="edu--my-course-info-bottom">
        <div className="edu--my-course-info-bottom-item">
          <div>전체 수강 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.length}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 중인 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.filter((course) => !course.done).length}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 완료한 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.filter((course) => course.done).length}
          </div>
        </div>
      </div>
    </S.MyCourseInfoWrapper>
  );
};

export default MyCourseInfo;
