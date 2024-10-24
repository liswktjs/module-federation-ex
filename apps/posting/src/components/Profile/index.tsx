import React, { useEffect, useState } from "react";
import "./index.scss";
import useAuth0Client from "../../hooks/useAuth0Client";
import { UserType } from "../../types";
import { getUser } from "../../api";

const Profile = () => {
  const auth0Client = useAuth0Client();

  const [user, setUser] = useState<null | UserType>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const user = await getUser(token);
        setUser(user);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  if (user === null) {
    return null;
  }

  const { picture, name, email, view_count, update_count } = user;

  return (
    <div className="posting--profile">
      <div className="posting--profile-top">
        <img src={picture} />
        <div className="posting--profile-name">{name}</div>
        <div className="posting--profile-email">{email}</div>
      </div>
      <div className="posting--profile-bottom">
        <div className="posting--profile-bottom-item">
          <div>프로필 조회자</div>
          <div className="posting--profile-bottom-item-count">{view_count}</div>
        </div>
        <div className="posting--profile-bottom-item">
          <div>업데이트 노출</div>
          <div className="posting--profile-bottom-item-count">
            {update_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
