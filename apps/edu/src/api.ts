import { CourseContentsType, CourseItemType, UserType } from "./types";

const HOST_NAME = "http://localhost:4000";

export const getCourses = async (token: string): Promise<CourseItemType[]> => {
  const res = await fetch(`${HOST_NAME}/courses?_sort=id&order=desc`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const getCourseContents = async (
  token: string,
  id: number
): Promise<CourseContentsType> => {
  const res = await fetch(`${HOST_NAME}/course-contents/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const getUser = async (token: string): Promise<UserType> => {
  const res = await fetch(`${HOST_NAME}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
