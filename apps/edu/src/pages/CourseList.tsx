import { useAtomValue } from "jotai";
import React from "react";
import { coursesAtom } from "../atoms";
import CourseListItem from "../components/CourseListItem";

const CourseList = () => {
  const courses = useAtomValue(coursesAtom);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
