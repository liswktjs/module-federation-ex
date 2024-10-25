import { User } from "@auth0/auth0-spa-js";

export interface CourseStatusType {
  courseId: number;
  done: boolean;
}

export interface UserType extends User {
  view_count: number;
  update_count: number;
  courses: CourseStatusType[];
}

export interface CourseItemType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

export interface CourseContentsType {
  id: number;
  goals: string[];
  summaries: string[];
}
