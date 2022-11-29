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
}
`;
const NoticeDateText = styled.p`
  font-size: 0.8em;
  color: #999999;
  text-align: end;
  padding-bottom: 10px;
}
`;
const NoticeInfoDiv = styled.div`
  padding-bottom: 2vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
const EditButton = styled(Link)`
  font-size: 1rem;
  padding: 5px;
  display: inline;
  color: #777e57;
`;
const DeleteButton = styled.p`
  font-size: 1rem;
  padding: 5px;
  cursor: pointer;
  display: inline;
  color: #dc4040;
`;

const BackButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NoticeDetail = () => {
  const notice = useLocation().state.notice;
  const isEdited = notice.createdTime !== notice.updatedTime ? true : false;
  const deleteNoticeMutation = useDeleteNotice();
  const navigate = useNavigate();

  const deleteNotice = () => {
    deleteNoticeMutation.mutate(notice);
    navigate(`/`);
  };

  return (
    <ContainerDiv>
      <Toptitle>공지사항</Toptitle>
      <NoticeInfoDiv>
        <NoticeTitle>{notice.title}</NoticeTitle>
        <NoticeDateText>작성일 : {notice.createdTime}</NoticeDateText>
        {isEdited && <NoticeDateText>수정일 : {notice.updatedTime}</NoticeDateText>}
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
