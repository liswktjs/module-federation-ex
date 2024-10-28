import React, { PropsWithChildren } from "react";
import * as S from "./index.styles";
import ApplyStatusContainer from "../../container/ApplyStatusContainer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.LayoutWrapper>
      <div className="job--layout-apply-status">
        <ApplyStatusContainer />
      </div>
      <div className="job--layout-children">{children}</div>
    </S.LayoutWrapper>
  );
};

export default Layout;
