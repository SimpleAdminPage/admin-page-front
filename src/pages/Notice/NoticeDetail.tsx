import React from "react";
import { useParams } from "react-router-dom";

const NoticeDetail = () => {
  const { noticeID } = useParams();
  return (
    <div>
      <p>{noticeID}</p>
    </div>
  );
};

export default NoticeDetail;
