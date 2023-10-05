import MDEditor from "@uiw/react-md-editor";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CursorPointerSwitch, HoverColorSwitch, PrimaryColorSwitch } from "../assets/styles/Styles";
import { db } from "../firebase";

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
const StyledP = styled.p``;

const BlogEditor = ({ theme, user, logout }) => {
  const [blog, setBlog] = useState("");
  const title = blog.split("\n")[0];
  const content = blog.split("\n").slice(1).join("\n");
  const time = new Date().toLocaleString();
  const tag = blog.split("\n")[-1];
  const blogId = blog
    .split("\n")[0]
    .split(" ")
    .slice(1)
    .join("-")
    .toLowerCase();
  const blogObject = { title: title, content: content, time: time, tag: tag };
  const post = async () => await setDoc(doc(db, "blogs", blogId), blogObject);
  return (
    <EditorContainer>
      <MDEditor value={blog} onChange={setBlog} />
      <MDEditor.Markdown source={blog} style={{ whiteSpace: "pre-wrap" }} />
      <StyledLink to="/post">
        <StyledButton $theme={theme} onClick={post}>
          Post
        </StyledButton>
      </StyledLink>
      <StyledLink to="/logout">
        <StyledButton $theme={theme} onClick={logout}>
          Log out
        </StyledButton>
      </StyledLink>
      <StyledP $theme={theme}>admin: {user?.email}</StyledP>
    </EditorContainer>
  );
};

export default BlogEditor;
