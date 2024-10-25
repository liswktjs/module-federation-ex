import { useAtomValue } from "jotai";
import React from "react";
import { userAtom } from "../atoms";
import Profile from "../components/Profile";

const ProfileContainer = () => {
  const user = useAtomValue(userAtom);

  return <Profile user={user} />;
};

export default ProfileContainer;
