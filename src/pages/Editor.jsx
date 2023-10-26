/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";
import {
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { marked } from "marked";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  BasicButton,
  BasicInput,
  BasicLink,
  PrimarySecondary,
  SecondaryPrimary,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";
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
  width: 100%;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 2.5rem 1fr 9rem 9rem 5rem;
  align-items: center;
  column-gap: 1rem;
`;
const TagLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  color: ${PrimarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
`;
const TagInput = styled(BasicInput)`
  width: 10rem;
  height: 1.5rem;
  padding: 0 5px;
`;
const StyledLink = styled(BasicLink)`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-align: center;
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

const Editor = ({ blogToEdit, setBlogToEdit, draft, setDraft, tagsToEdit }) => {
  const navigate = useNavigate();
  const playPick = useContext(PlayPickContext);

  /* retrieved draft data */
  const retrievedBlog = blogToEdit?.title + "\n\n" + blogToEdit?.content;
  const retrievedDraft = draft?.title + "\n\n" + draft?.content;
  const retrievedTags = tagsToEdit?.join(" ");

  const initialContent = blogToEdit
    ? retrievedBlog
    : draft
    ? retrievedDraft
    : "";

  const [blog, setBlog] = useState(initialContent);

  /* to post a blog or save a draft */
  const title = blog.split("\n")[0];
  const overview = marked.parse(
    blog.split("\n").filter((x) => x !== "")[1] || ""
  );
  const content = marked.parse(blog.split("\n").slice(1).join("\n") || "");
  const time = new Date().toLocaleString();

  const initialTagInput = tagsToEdit ? retrievedTags : "";
  const [tagInput, setTagInput] = useState(initialTagInput);
  const handleTag = (e) => setTagInput(e.target.value);
  const tag = tagInput.toString().toLowerCase().split(" ");

  //tags need to be retrived and updated as well
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

  /* post an initial/edited blog to firestore */
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
    //error handle
  };

  /* save an initial or edited draft to firestore */
  const initialDraft = {
    timestamp: timestamp,
    id: "draft",
    title: title || "",
    overview: overview || "",
    content: content || "",
    time: time,
    tag: tag || "",
  };

  const updatedDraft = {
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
      await updateDoc(doc(db, "drafts", "draft"), updatedDraft);
    } else {
      await setDoc(doc(db, "drafts", "draft"), initialDraft);
    }
    navigate("/post");
    //handle error
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
          placeholder: "## blog title \n\n blog body...",
        }}
      />
      <StyledDiv>
        <TagLabel>Tags: </TagLabel>
        <TagInput
          id="tag"
          name="tag"
          value={tagInput}
          onChange={handleTag}
          placeholder="tag end with space..."
        />
        <StyledLink to="/blogs" onClick={playPick}>
          Back to Blogs
        </StyledLink>
        <StyledButton onClick={saveDraft}>Save to Draft</StyledButton>
        <StyledButton onClick={post}>Post</StyledButton>
      </StyledDiv>
    </EditorContainer>
  );
};

export default Editor;
