import React from "react";
import * as S from "./index.styles";
import { UserType } from "../../types";

interface Props {
  user: UserType | null;
}

const Profile = ({ user }: Props) => {
  if (user === null) {
    return null;
  }

  const { picture, name, email, view_count, update_count } = user;

  return (
    <S.ProfileWrapper>
      <div className="edu--profile-top">
        <img src={picture} />
        <div className="edu--profile-name">{name}</div>
        <div className="edu--profile-email">{email}</div>
      </div>
      <div className="edu--profile-bottom">
        <div className="edu--profile-bottom-item">
          <div>프로필 조회자</div>
          <div className="edu--profile-bottom-item-count">{view_count}</div>
        </div>
        <div className="edu--profile-bottom-item">
          <div>업데이트 노출</div>
          <div className="edu--profile-bottom-item-count">{update_count}</div>
        </div>
      </div>
    </S.ProfileWrapper>
  );
};

export default Profile;
