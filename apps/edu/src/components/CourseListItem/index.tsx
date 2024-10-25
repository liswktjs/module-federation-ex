import React from "react";
import { useNavigate } from "react-router-dom";
import { CourseItemType } from "../../types";
import * as S from "./index.styles";

const CourseListItem = ({
  id,
  title,
  thumbnail,
  description,
}: CourseItemType) => {
  const navigate = useNavigate();

  const onCourseClick = () => {
    navigate(`${id}`);
  };

  return (
    <S.CourseListItemWrapper onClick={onCourseClick}>
      <div className="edu--course-list-item-thumbnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-list-item-info">
        <div className="edu--course-list-item-info-title">{title}</div>
        <div
          className="edu--course-list-item-info-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </S.CourseListItemWrapper>
  );
};

export default CourseListItem;
