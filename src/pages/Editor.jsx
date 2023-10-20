/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";
import {
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { marked } from "marked";

import {
  BasicLink,
  BasicButton,
  SecondaryPrimary,
  PrimarySecondary,
  TertiaryParagraph,
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
  @media (min-width: 1024px) {
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
const StyledLink = styled(BasicLink)`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  &:link,
  &:visited {
    color: ${PrimarySecondary};
    text-shadow: 1px 1px ${SecondaryPrimary};
  }
  &:hover,
  &:active {
    color: ${TertiaryParagraph};
  }
`;
const StyledButton = styled(BasicButton)`
  color: ${PrimarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  padding: 0.3rem 0.5rem;
  &:hover,
  &:active,
  &:focus {
    color: ${TertiaryParagraph};
  }
`;

const Editor = ({
  theme,
  blogToEdit,
  setBlogToEdit,
  draft,
  setDraft,
  playPick,
}) => {
  const retrievedBlog = blogToEdit?.title + "\n\n" + blogToEdit?.content;
  const retrievedDraft = draft?.title + "\n\n" + draft?.content;
  const initialContent = blogToEdit
    ? retrievedBlog
    : draft
    ? retrievedDraft
    : "";
  const [blog, setBlog] = useState(initialContent);
  const title = blog.split("\n")[0];
  const overview = marked.parse(
    blog.split("\n").filter((x) => x !== "")[1] || ""
  );
  const content = marked.parse(blog.split("\n").slice(1).join("\n") || "");
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
  };
  const preBlogId = blogToEdit?.id;
  const updatedBlogObject = {
    timestamp: blogToEdit?.timestamp,
    id: preBlogId,
    title: title,
    overview: overview,
    content: content,
    time: blogToEdit?.time,
    tag: tag,
  };

  const navigate = useNavigate();
  const post = async () => {
    playPick();
    if (blogToEdit) {
      await updateDoc(doc(db, "blogs", preBlogId), updatedBlogObject);
      setBlogToEdit(null);
    } else if (draft) {
      await setDoc(doc(db, "blogs", blogId), blogObject);
      await deleteDoc(doc(db, "drafts", "draft"));
      setDraft(null);
    } else {
      await setDoc(doc(db, "blogs", blogId), blogObject);
    }
    navigate("/post");
  };
  const initialDraft = {
    timestamp: timestamp,
    id: "draft",
    title: title || "",
    overview: overview || "",
    content: content || "",
    time: time,
    tag: tag || "",
  };
  const updatedDraftObject = {
    timestamp: draft?.timestamp,
    id: "draft",
    title: title,
    overview: overview,
    content: content,
    time: draft?.time,
    tag: tag,
  };
  const saveDraft = async () => {
    playPick();
    if (draft) {
      await updateDoc(doc(db, "drafts", "draft"), updatedDraftObject);
    } else {
      await setDoc(doc(db, "drafts", "draft"), initialDraft);
    }
    navigate("/post");
  };

  useEffect(() => {
    document.title = "Editor ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
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
      <StyledDiv>
        <StyledLink $theme={theme} to="/blogs" onClick={playPick}>
          Back to Blogs
        </StyledLink>
        <StyledButton $theme={theme} onClick={saveDraft}>
          Save to Draft
        </StyledButton>
        <StyledButton $theme={theme} onClick={post}>
          Post
        </StyledButton>
      </StyledDiv>
    </EditorContainer>
  );
};

export default Editor;
