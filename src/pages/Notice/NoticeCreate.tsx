import React, { useState } from "react";

const NoticeCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  return (
    <div>
      <form>
        <label htmlFor="title">title</label>
        <input type="text" name="title" placeholder="제목을 입력하세요" value={title}></input>
        <label htmlFor="content">content</label>
        <input type="file" name="content" value={content}></input>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default NoticeCreate;
