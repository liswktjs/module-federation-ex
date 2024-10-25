import { atom } from "jotai";
import { CourseItemType, UserType } from "./types";

export const userAtom = atom<null | UserType>(null);
export const coursesAtom = atom<CourseItemType[]>([]);
