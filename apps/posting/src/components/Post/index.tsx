import React from "react";
import { PostingItemAuthorType } from "../../types";
import { Button } from "@federation/ui-kit";
import "./index.scss";

interface Props {
  id: number;
  author: PostingItemAuthorType;
  message: string;
  deletePostById: (id: number) => void;
}

const Post = ({ id, author, message, deletePostById }: Props) => {
  const onDeleteClick = () => {
    deletePostById(id);
  };
  const { picture, name, email } = author;

  return (
    <div className="posting--post">
      <div className="posting--post-profile">
        <img src={picture} />
        <div className="posting--post-profile-text">
          <div className="posting--post-profile-name">{name}</div>
          <div className="posting--post-profile-email">{email}</div>
        </div>
      </div>
      <div
        className="posting--post-message"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      <div className="posting--post-actions">
        <Button onClick={onDeleteClick}>Delete</Button>
      </div>
    </div>
  );
};

export default Post;
