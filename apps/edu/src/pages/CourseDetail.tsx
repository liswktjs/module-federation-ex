import { useAuth0Client } from "@federation/shared";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseContentsType } from "../types";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { coursesAtom } from "../atoms";
import CourseDetailItem from "../components/CourseDetailItem";
import { getCourseContents } from "../api";
import CourseContents from "../components/CourseContents";
import CourseActions from "../components/CourseActions";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const auth0Client = useAuth0Client();

  const [courseContents, setCourseContents] =
    useState<CourseContentsType | null>(null);

  const course = useAtomValue(
    useMemo(() => {
      return selectAtom(coursesAtom, (course) =>
        course.find((course) => course.id === Number(id))
      );
    }, [id])
  );

  useEffect(() => {
    if (course === undefined) return;

    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const courseContents = await getCourseContents(token, course.id);

        setCourseContents(courseContents);
      } catch (e) {
        alert(e);
      }
    })();
  }, [auth0Client, course]);

  if (!course) {
    return null;
  }

  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents && <CourseContents {...courseContents} />}
      <CourseActions />
    </>
  );
};

export default CourseDetail;
