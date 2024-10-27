import React from "react";
import * as css from "./index.css";
import { Button } from "@federation/ui-kit";

const ManageConnection = () => {
  return (
    <div className={css.wrapper}>
      <div>대기 중인 1촌 신청 없음</div>
      <div>
        <Button>관리</Button>
      </div>
    </div>
  );
};

export default ManageConnection;
