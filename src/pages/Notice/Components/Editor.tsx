import { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const CustomReactQuill = styled(ReactQuill)`
  width: 80vw;
  height: 50vh;
  }
`;

interface EditorProps {
  htmlContent: string;
  setHtmlContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = ({ htmlContent, setHtmlContent }: EditorProps) => {
  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );

  return (
    <CustomReactQuill
      ref={quillRef}
      value={htmlContent}
      onChange={setHtmlContent}
      modules={modules}
      theme="snow"
      placeholder="내용을 입력해주세요."
    />
  );
};

export default Editor;
