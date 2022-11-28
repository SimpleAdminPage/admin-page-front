import React from "react";
import { useNotices } from "../../../hooks/useNotices";
import { NoticeType } from "../types";
import NoticeListItem from "./NoticeItem";

const NoticeList = () => {
  const { data, isError, isLoading } = useNotices();

  if (isLoading)
    return (
      <div>
        <h1>로딩 중...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>error 발생...</h1>
      </div>
    );

  return (
    <div>
      {data.map((item: NoticeType) => (
        <NoticeListItem notice={item} key={item.id}></NoticeListItem>
      ))}
    </div>
  );
};

export default NoticeList;
