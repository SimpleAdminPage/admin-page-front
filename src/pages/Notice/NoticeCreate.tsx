import React, { useState } from "react";
import Editor from "./Components/Editor";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoticeTable = styled.table`
  margin: 5vh auto;
  }
`;
const NoticeTr = styled.table`
  margin: 2vh 0;
  }
`;
const NoticeTd = styled.table`
  padding-left: 2vw;
  }
`;
const TitleInput = styled.input`
  padding-left: 1vw;
  width: 80vw;
  height: 4vh;
  border-color: #ccc;
`;
const CustomButton = styled.button<CustomButtonProps>`
  width: 15vw;
  padding: 10px 0 10px;
  background-color: ${(props) => props.bgColor};
  color: #ffffff;
  margin: 0 10px 0;
`;
const ButtonBoxDiv = styled.div`
  margin: 5vh auto;
  width: 80vw;
  display: flex;
  justify-content: flex-end;
`;

interface CustomButtonProps {
  bgColor: string;
}

const NoticeCreate = () => {
  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const navigate = useNavigate();

  const createNotice = () => {
    const createInfo = { title: "", content: "" };
    createInfo.title = title;
    createInfo.content = htmlContent;
    console.log("create");
    console.log(createInfo);
    // 서버로 전송
  };
  const goBack = () => navigate(-1);

  return (
    <div>
      <NoticeTable>
        <NoticeTr>
          <th>
            <label htmlFor="title">제목</label>
          </th>
          <NoticeTd>
            <TitleInput
              type="text"
              id="title"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></TitleInput>
          </NoticeTd>
        </NoticeTr>
        <NoticeTr>
          <th>
            <label htmlFor="content">내용</label>
          </th>
          <NoticeTd>
            <Editor htmlContent={htmlContent} setHtmlContent={setHtmlContent}></Editor>
          </NoticeTd>
        </NoticeTr>
      </NoticeTable>
      <ButtonBoxDiv>
        <CustomButton type="submit" onClick={createNotice} bgColor="#9fa584">
          저장
        </CustomButton>
        <CustomButton type="submit" onClick={goBack} bgColor="#8b8b8b">
          취소
        </CustomButton>
      </ButtonBoxDiv>
    </div>
  );
};

export default NoticeCreate;
