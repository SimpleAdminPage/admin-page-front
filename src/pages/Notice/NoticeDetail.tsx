import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDeleteNotice } from "../../hooks/useDeleteNotice";
import "react-quill/dist/quill.snow.css";

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
  width: 100%;
`;
const NoticeDateText = styled.p`
  font-size: 0.8em;
  color: #999999;
  text-align: end;
  padding-bottom: 0.5rem;
}
`;
const NoticeInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 2vh;
`;
const NoticeContent = styled.div`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  padding: 3vh 0 3vh;
`;
const BackButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BackButton = styled(Link)`
  width: 15vw;
  background-color: #9fa584;
  color: #ffffff;
  margin-top: 3vh;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem;
  font-weight: 400;
  text-align: center;
  border-radius: 4px;
`;
const EditButton = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem;
  display: inline;
  color: #777e57;
`;
const DeleteButton = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  display: inline;
  color: #dc4040;
`;

const NoticeDetail = () => {
  const notice = useLocation().state.notice;
  const isEdited = notice.createdTime !== notice.updatedTime ? true : false;
  const deleteNoticeMutation = useDeleteNotice();
  const navigate = useNavigate();

  const deleteNotice = () => {
    deleteNoticeMutation.mutate(notice);
    navigate(`/`); // go back Home
  };

  return (
    <ContainerDiv>
      <Toptitle>공지사항</Toptitle>
      <NoticeInfoDiv>
        <NoticeTitle>{notice.title}</NoticeTitle>
        <NoticeDateText>작성일 : {notice.createdTime.substr(0, 16)}</NoticeDateText>
        {isEdited && <NoticeDateText>수정일 : {notice.updatedTime.substr(0, 16)}</NoticeDateText>}
        <div>
          <EditButton to={`update/${notice.id}`} state={{ notice: notice }}>
            수정
          </EditButton>
          <DeleteButton onClick={deleteNotice}>삭제</DeleteButton>
        </div>
      </NoticeInfoDiv>
      <NoticeContent
        className="view ql-editor"
        dangerouslySetInnerHTML={{ __html: notice.content }}
      />
      <BackButtonBox>
        <BackButton to="..">목록</BackButton>
      </BackButtonBox>
    </ContainerDiv>
  );
};

export default NoticeDetail;
