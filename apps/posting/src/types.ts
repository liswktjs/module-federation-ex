import { type User } from "@auth0/auth0-spa-js";

export interface PostingItemAuthorType {
  email: string;
  name: string;
  picture: string;
}

export interface PostingItemType {
  id: number;
  message: string;
  createdAt: string;
  author: PostingItemAuthorType;
}

export interface UserType extends User {
  view_count: number;
  update_count: number;
}
