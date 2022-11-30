import React, { useState } from "react";
import Editor from "./Components/Editor";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCreateNotice } from "../../hooks/useCreateNotice";

const ContainerDiv = styled.div`
  padding: 5vh 2vw 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoticeTable = styled.table`
  margin-bottom: 5vh;
`;
const NoticeTd = styled.td`
  padding-left: 2vw;
`;
const TitleInput = styled.input`
  padding-left: 1vw;
  width: 80vw;
  height: 4vh;
  border-color: #ccc;
`;
const ButtonBoxDiv = styled.div`
  padding-top: 5vh;
`;
const CustomButton = styled.button<CustomButtonProps>`
  width: 15vw;
  padding: 10px 0 10px;
  background-color: ${(props) => props.bgColor};
  color: #ffffff;
  margin-left: 10px;
`;

interface CustomButtonProps {
  bgColor: string;
}

const NoticeCreate = () => {
  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const navigate = useNavigate();
  const createNoticeMutation = useCreateNotice();
  const titleMaxLength = 100;

  const createNotice = () => {
    const createInfo = { title: title, content: htmlContent };
    createNoticeMutation.mutate(createInfo);
    navigate(`/`); // go back Home
  };
  const goBack = () => navigate(-1);

  return (
    <ContainerDiv>
      <NoticeTable>
        <tbody>
          <tr>
            <th>
              <label htmlFor="title">제목</label>
            </th>
            <NoticeTd>
              <TitleInput
                type="text"
                id="title"
                placeholder={`제목을 입력하세요.  (최대 ${titleMaxLength}자)`}
                maxLength={titleMaxLength}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></TitleInput>
            </NoticeTd>
          </tr>
          <tr>
            <th>
              <label htmlFor="content">내용</label>
            </th>
            <NoticeTd>
              <Editor htmlContent={htmlContent} setHtmlContent={setHtmlContent}></Editor>
            </NoticeTd>
          </tr>
        </tbody>
      </NoticeTable>
      <ButtonBoxDiv>
        <CustomButton type="submit" onClick={createNotice} bgColor="#9fa584">
          저장
        </CustomButton>
        <CustomButton type="submit" onClick={goBack} bgColor="#8b8b8b">
          취소
        </CustomButton>
      </ButtonBoxDiv>
    </ContainerDiv>
  );
};

export default NoticeCreate;
