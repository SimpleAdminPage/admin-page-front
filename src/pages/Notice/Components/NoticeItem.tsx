import React from "react";
import { Link } from "react-router-dom";
import { NoticeType } from "../types";
import styled from "styled-components";

const NoticeDiv = styled.div`
  height: 7vh;
  width: 55vw;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw 0;
  align-items: center;
  border-bottom: 1px solid #485652;
`;
const NoticeTitle = styled(Link)`
  font-size: 1.5rem;
  color: #6d7975;
  &:hover {
    color: #92c3b3;
  }
`;
const NoticeDate = styled.p`
  font-size: 1rem;
`;

interface NoticeProps {
  notice: NoticeType;
}

const NoticeListItem = ({ notice }: NoticeProps) => {
  return (
    <NoticeDiv>
      <NoticeTitle to={`detail/${notice.id}`}>{notice.title}</NoticeTitle>
      <NoticeDate>{notice.createdTime}</NoticeDate>
    </NoticeDiv>
  );
};

export default NoticeListItem;
