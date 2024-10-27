import React from "react";
import * as css from "./index.css";
import IconDefault from "../../assets/IconDefault";
import { Button } from "@federation/ui-kit";

interface Props {
  name: string;
  picture: string | null;
  role: string;
  networkCount: number;
}

const Connection = ({ name, picture, role, networkCount }: Props) => {
  return (
    <div className={css.wrapper}>
      <div>
        {picture === null && <IconDefault />}
        {picture !== null && <img className={css.picture} src={picture} />}
      </div>
      <div className={css.name}>{name}</div>
      <div className={css.role}>{role}</div>
      <div className={css.networkCount}>공통 1촌 {networkCount}명</div>
      <div>
        <Button>1촌 맺기</Button>
      </div>
    </div>
  );
};

export default Connection;
