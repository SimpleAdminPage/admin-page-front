import React from "react";
import NoticeList from "./Components/NoticeList";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoticeCreateButton = styled(Link)`
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a6a998;
  border-radius: 5px;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 2vh;
  margin-left: 80%;
  &:hover {
    background-color: #c6cbb1;
    color: #ffffff;
  }
`;

const Home = () => {
  return (
    <div>
      <NoticeCreateButton to={"create"}>작성하기</NoticeCreateButton>
      <NoticeList></NoticeList>
    </div>
  );
};

export default Home;
