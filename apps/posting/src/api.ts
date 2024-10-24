import type { PostingItemType, UserType } from "./types";

export const getPosts = async (token: string): Promise<PostingItemType[]> => {
  const res = await fetch("http://localhost:4000/posts?_sort=id&_order=desc", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const createPosting = async (
  token: string,
  body: { message: string }
): Promise<void> => {
  await fetch("http://localhost:4000/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const deletePosting = async (
  token: string,
  id: number
): Promise<void> => {
  await fetch(`http://localhost:4000/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getUser = async (token: string): Promise<UserType> => {
  const res = await fetch("http://localhost:4000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};
