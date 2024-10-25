import React from "react";
import { CourseItemType } from "../../types";
import * as S from "./index.styles";

const CourseDetailItem = ({
  thumbnail,
  title,
  description,
}: CourseItemType) => {
  return (
    <S.CourseDetailItemWrapper>
      <div className="edu--course-detail-item-thumbnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-detail-item-info">
        <div className="edu--course-detail-item-info-title">{title}</div>
        <div
          className="edu--course-detail-item-info-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </S.CourseDetailItemWrapper>
  );
};

export default CourseDetailItem;
