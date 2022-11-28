import React from "react";
import { NoticeType } from "../types";

interface NoticeProps {
  notice: NoticeType;
}

const NoticeListItem = ({ notice }: NoticeProps) => {
  return (
    <div>
      <p>{notice.title}</p>
      <p>{notice.createdTime}</p>
    </div>
  );
};

export default NoticeListItem;
