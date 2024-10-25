import React, { PropsWithChildren, useEffect } from "react";
import * as S from "./index.styles";
import ProfileContainer from "../../container/ProfileContainer";
import MyCourseInfoContainer from "../../container/MyCourseInfoContainer";
import { useAuth0Client } from "@federation/shared";
import { useSetAtom } from "jotai";
import { coursesAtom, userAtom } from "../../atoms";
import { getCourses, getUser } from "../../api";

const Layout = ({ children }: PropsWithChildren) => {
  const auth0Client = useAuth0Client();
  const setUserAtom = useSetAtom(userAtom);
  const setCourses = useSetAtom(coursesAtom);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        getUser(token).then(setUserAtom);
        getCourses(token).then(setCourses);
      } catch (e) {
        alert(e);
      }
    })();
  }, [auth0Client, setCourses, setUserAtom]);

  return (
    <S.LayoutWrapper>
      <div className="edu--layout-left">
        <ProfileContainer />
        <MyCourseInfoContainer />
      </div>
      <div className="eud--layout-right">{children}</div>
    </S.LayoutWrapper>
  );
};

export default Layout;
