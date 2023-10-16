import MDEditor from "@uiw/react-md-editor";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { marked } from "marked";

import {
  CursorPointerSwitch,
  PrimaryColorSwitch,
  TertiaryHover,
} from "../assets/styles/Styles";
import { db } from "../firebase";

const EditorContainer = styled.div`
  width: 80vw;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1000px) {
    width: 70vw;
  }
`;
const StyledMDEditor = styled(MDEditor)`
  width: 100%;
`;
const StyledDiv = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  // seems like longer than the button
`;
const StyledButton = styled.button`
  width: auto;
  height: 2rem;
  padding: 0.5rem;
  border: 2px solid ${PrimaryColorSwitch};
  border-radius: 5px;
  cursor: ${CursorPointerSwitch};
  background-color: transparent;
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  &:hover,
  &:active {
    background-color: ${TertiaryHover};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Editor = ({ theme, logout }) => {
  const [blog, setBlog] = useState("");
  const title = blog.split("\n")[0];
  const overview = blog.split("\n").filter((x) => x !== "")[1];
  const content = marked.parse(blog.split("\n").slice(1).join("\n"));
  const time = new Date().toLocaleString();
  const tag = blog.split("\n")[blog.split("\n").length - 1].replace("#", "");
  const blogId =
    blog.split("\n")[0].split(" ").slice(1).join("-").toLowerCase() +
    "-" +
    new Date().getTime();
  const timestamp = serverTimestamp();
  const blogObject = {
    timestamp: timestamp,
    id: blogId,
    title: title,
    overview: overview,
    content: content,
    time: time,
    tag: tag,
    type: "markdown",
  };
  const post = async () => await setDoc(doc(db, "blogs", blogId), blogObject);
  const saveDraft = async () =>
    await setDoc(doc(db, "drafts", blogId), blogObject);

  useEffect(() => {
    document.title = "Editor ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);

  return (
    <EditorContainer>
      <StyledMDEditor
        value={blog}
        onChange={setBlog}
        textareaProps={{
          placeholder:
            "## your title \n\n put your content here... \n\n #your tag",
        }}
      />
      <MDEditor.Markdown source={blog} style={{ whiteSpace: "pre-wrap" }} />
      <StyledDiv>
        <StyledButton $theme={theme} onClick={saveDraft}>
          Save to Draft
        </StyledButton>
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
      </StyledDiv>
    </EditorContainer>
  );
};

export default Editor;
