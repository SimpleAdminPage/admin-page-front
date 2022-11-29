import React from "react";
import NoticeList from "./Components/NoticeList";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
  padding: 5vh 20vw 10vh;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NoticeCreateButton = styled(Link)`
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9fa584;
  border-radius: 5px;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 2vh;
  &:hover {
    background-color: #b7bd9b;
    color: #ffffff;
  }
`;

const Home = () => {
  return (
    <ContainerDiv>
      <ButtonContainer>
        <NoticeCreateButton to={"create"}>공지 작성하기</NoticeCreateButton>
      </ButtonContainer>
      <NoticeList></NoticeList>
    </ContainerDiv>
  );
};

export default Home;
