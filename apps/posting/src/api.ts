import type { PostingItemType, UserType } from "./types";

const HOST_NAME = "http://localhost:4000";

export const getPosts = async (token: string): Promise<PostingItemType[]> => {
  const res = await fetch(`${HOST_NAME}/posts?_sort=id&_order=desc`, {
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
  await fetch(`${HOST_NAME}/posts`, {
    method: "POST",
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
  await fetch(`${HOST_NAME}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUser = async (token: string): Promise<UserType> => {
  const res = await fetch(`${HOST_NAME}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};
