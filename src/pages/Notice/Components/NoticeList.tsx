import React from "react";
import { useNotices } from "../../../hooks/useNotices";
import { NoticeType } from "../types";
import NoticeListItem from "./NoticeItem";
import styled from "styled-components";

const NoticeListDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5vh;
`;

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
    <NoticeListDiv>
      <div>
        {data.map((item: NoticeType) => (
          <NoticeListItem notice={item} key={item.id}></NoticeListItem>
        ))}
      </div>
    </NoticeListDiv>
  );
};

export default NoticeList;
