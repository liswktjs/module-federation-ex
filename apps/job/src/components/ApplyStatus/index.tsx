import React, { useEffect } from "react";
import { ApplyStatusType } from "../../types";
import * as S from "./index.styles";

interface Props {
  applyStatus: null | ApplyStatusType;
  fetchApplyStatus: () => Promise<void>;
}

const ApplyStatus = ({ applyStatus, fetchApplyStatus }: Props) => {
  useEffect(() => {
    fetchApplyStatus();
  }, [fetchApplyStatus]);

  if (!applyStatus) {
    return null;
  }

  const { myJobsCount, myOnlineClassesCount, mySavedUpdatesCount } =
    applyStatus;

  return (
    <S.ApplyStatusWrapper>
      <div className="job--apply-status-top">
        <span className="job--apply-status--top-title">내 항목</span>
      </div>
      <div className="job--apply-status-bottom">
        <div className="job--apply-status-bottom-item">
          <div>나의 채용 공고</div>
          <div className="job--apply-status-item-count">{myJobsCount}</div>
        </div>
        <div className="job--apply-status-bottom-item">
          <div>나의 온라인 클래스</div>
          <div className="job--apply-status-item-count">
            {myOnlineClassesCount}
          </div>
        </div>
        <div className="job--apply-status-bottom-item">
          <div>저장한 업데이트와 글</div>
          <div className="job--apply-status-item-count">
            {mySavedUpdatesCount}
          </div>
        </div>
      </div>
    </S.ApplyStatusWrapper>
  );
};

export default ApplyStatus;
