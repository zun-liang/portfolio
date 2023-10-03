/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CursorPointerSwitch, HoverColorSwitch, PrimaryColorSwitch } from "../assets/styles/Styles";

const EditorContainer = styled.div`
  width: 80vw;
  margin-top: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  // seems like longer than the button
`;
const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  border: 2px solid ${PrimaryColorSwitch};
  border-radius: 5px;
  cursor: ${CursorPointerSwitch};
  background-color: transparent;
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  &:hover,
  &:active {
    background-color: ${HoverColorSwitch};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Preview = styled.div``;
const StyledP = styled.p``;

const BlogEditor = ({ theme, user }) => {
  const editorRef = useRef(null);
  const [blog, setBlog] = useState(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setBlog(editorRef.current.getContent());
      //can design a preview page.
      //how to save to firebase
    }
  };
  return (
    <EditorContainer>
      <Editor
        apiKey="your-api-key" //need to update here later? save it privately?
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <StyledButton $theme={theme} onClick={log}>
        Preview
      </StyledButton>
      <StyledLink to="post">
        <StyledButton $theme={theme}>Post</StyledButton>
      </StyledLink>
      <Preview>{blog}</Preview>
      <StyledP $theme={theme}>admin: {user?.email}</StyledP>
    </EditorContainer>
  );
};

export default BlogEditor;
