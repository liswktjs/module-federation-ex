import React, { useRef } from "react";
import "./index.scss";
import { Button } from "@federation/ui-kit";

interface Props {
  writePost: (message: string) => Promise<void>;
}

const WritePost = ({ writePost }: Props) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onWriteClick = async () => {
    if (messageRef.current === null) {
      return;
    }
    await writePost(
      messageRef.current.value.replace(/(?:\r\n|\r|\n)/g, "<br />")
    );
    messageRef.current.value = "";
  };

  return (
    <div className="posting--write-post">
      <textarea className="posting--write-post-textarea" ref={messageRef} />
      <div className="posting-write-post-actions">
        <Button onClick={onWriteClick}>Post</Button>
      </div>
    </div>
  );
};

export default WritePost;
