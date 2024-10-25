import React from "react";
import * as S from "./index.styles";
import { Button } from "@federation/ui-kit";

const CourseActions = () => {
  return (
    <S.CourseActionsWrapper>
      <Button>Like this Course</Button>
      <Button>Add to My Course</Button>
    </S.CourseActionsWrapper>
  );
};

export default CourseActions;
