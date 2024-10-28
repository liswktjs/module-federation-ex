import React from "react";
import { useParams } from "react-router-dom";

const PageDetail = () => {
  const { id } = useParams();
  return <div>{id} item detail page</div>;
};

export default PageDetail;
