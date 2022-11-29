import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  margin: 10vh 20vw 10vh;
`;
const Toptitle = styled.h2`
  color: #666;
  font-size: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 3px solid #dfdfdf;
  margin-bottom: 1rem;
`;
const NoticeTitle = styled.h3`
  font-size: 1.2rem;
  color: #212121;
}
`;
const NoticeDateText = styled.p`
font-size: 0.8em;
color: #999999;
text-align: end
}
`;
const NoticeInfoDiv = styled.div`
  padding-bottom: 2vh;
`;
const NoticeContent = styled.div`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  padding: 3vh 0 3vh;
`;
const BackButton = styled(Link)`
  width: 15vw;
  padding: 10px 0 10px;
  background-color: #9fa584;
  color: #ffffff;
  margin-top: 3vh;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 4px;
`;
const BackButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NoticeDetail = () => {
  const data = useLocation().state.notice;
  const isEdited = data.createdTime !== data.updatedTime ? true : false;

  return (
    <ContainerDiv>
      <Toptitle>공지사항</Toptitle>
      <NoticeInfoDiv>
        <NoticeTitle>{data.title}</NoticeTitle>
        <NoticeDateText>작성일 : {data.createdTime}</NoticeDateText>
        {!isEdited && <NoticeDateText>수정일 : {data.updatedTime}</NoticeDateText>}
      </NoticeInfoDiv>
      <NoticeContent dangerouslySetInnerHTML={{ __html: data.content }} />
      <BackButtonBox>
        <BackButton to="..">목록</BackButton>
      </BackButtonBox>
    </ContainerDiv>
  );
};

export default NoticeDetail;
