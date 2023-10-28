/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";
import {
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { marked } from "marked";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";

import {
  BasicButton,
  BasicInput,
  BasicLink,
  PrimarySwitch,
  SecondaryPrimary,
  SecondarySwitch,
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
const UpperDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9rem 9rem 6rem;
  align-items: center;
  column-gap: 1rem;
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
  color: ${TertiaryParagraph};
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
    color: ${TertiaryParagraph};
    text-shadow: 1px 1px ${SecondaryPrimary};
  }
  &:hover,
  &:active {
    color: ${PrimarySwitch};
    text-shadow: 1px 0px ${SecondarySwitch};
  }
`;
const StyledButton = styled(BasicButton)`
  color: ${TertiaryParagraph};
  text-shadow: 1px 1px ${SecondaryPrimary};
  padding: 0.3rem 0.5rem;
  &:hover,
  &:active,
  &:focus {
    color: ${PrimarySwitch};
    text-shadow: 1px 0px ${SecondarySwitch};
  }
`;
const ResetButton = styled(StyledButton)``;
const RetrieveButton = styled(StyledButton)``;

const Editor = ({
  blogToEdit,
  setBlogToEdit,
  draft,
  setDraft,
  tagsToEdit,
  setTagsToEdit,
}) => {
  const playPick = useContext(PlayPickContext);
  const navigate = useNavigate();

  /* === blog and tagInput setup === */
  const retrievedBlog = blogToEdit?.title + "\n\n" + blogToEdit?.content;
  const retrievedTags = tagsToEdit?.join(" ");

  const initialBlog = blogToEdit ? retrievedBlog : "";
  const [blog, setBlog] = useState(initialBlog);

  const initialTagInput = tagsToEdit ? retrievedTags : "";
  const [tagInput, setTagInput] = useState(initialTagInput);

  const handleTagInput = (e) => setTagInput(e.target.value);

  /* === blog object setup === */
  const alphanumeric = /[\w]+/;
  const blogSplit = blog.split("\n");
  const title = blogSplit[0];
  const id =
    title
      .split(" ")
      .filter((x) => alphanumeric.test(x))
      .join("-")
      .toLowerCase() +
    "-" +
    new Date().getTime();
  const timestamp = serverTimestamp();
  const overview = marked.parse(blogSplit.filter((x) => x !== "")[1] || "");
  const time = new Date().toLocaleString();
  const content = marked.parse(blogSplit.slice(1).join("\n") || "");
  const tag = tagInput.toString().toLowerCase().split(" ");

  /* === post a blog to firestore === */

  const blogObj = {
    id: id,
    timestamp: timestamp,
    title: title,
    time: time,
    overview: overview,
    content: content,
    tag: tag,
  };

  const preId = blogToEdit?.id;

  const updatedBlogObj = {
    id: preId,
    timestamp: timestamp,
    title: title,
    time: time,
    overview: overview,
    content: content,
    tag: tag,
  };

  const post = async () => {
    try {
      playPick();
      if (blogToEdit) {
        await updateDoc(doc(db, "blogs", preId), updatedBlogObj);
        setBlogToEdit(null);
        setTagsToEdit(null);
      } else if (draft) {
        await setDoc(doc(db, "blogs", id), blogObj);
        await deleteDoc(doc(db, "drafts", "draft"));
        setDraft(null);
      } else {
        await setDoc(doc(db, "blogs", id), blogObj);
      }
      navigate("/post");
    } catch (error) {
      console.error("Error while posting blog:", error);
      throw new Error("Something went wrong while attempting to post blog.");
    }
  };

  /* === save a draft to firestore === */

  const initialDraft = {
    id: "draft",
    timestamp: timestamp,
    title: title,
    time: time,
    overview: overview,
    content: content,
    tag: tag,
  };

  const updatedDraft = {
    id: "draft",
    timestamp: timestamp,
    title: title,
    time: time,
    overview: overview,
    content: content,
    tag: tag,
  };

  const saveDraft = async () => {
    try {
      playPick();
      if (draft) {
        await updateDoc(doc(db, "drafts", "draft"), updatedDraft);
      } else {
        await setDoc(doc(db, "drafts", "draft"), initialDraft);
      }
      navigate("/post");
    } catch (error) {
      console.error("Error while saving draft:", error);
      throw new Error("Something went wrong while attempting to save draft.");
    }
  };

  const clearAll = () => {
    playPick();
    setBlog("");
    setTagInput("");
    setBlogToEdit(null);
    setTagsToEdit(null);
  };

  const getDraft = async () => {
    try {
      playPick();
      const docSnap = await getDoc(doc(db, "drafts", "draft"));
      const data = docSnap.data();
      const draftData = data.title + "\n\n" + data.content;
      setBlog(draftData);
      setTagInput(data.tag);
      setDraft(true);
    } catch (error) {
      console.error("Error while retrieving draft", error);
      throw new Error("Something went wrong while retrieving draft.");
    }
  };

  useEffect(() => {
    document.title = "Editor ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <EditorContainer>
      <UpperDiv>
        <UserProfile />
        <UpdateProfile />
        <RetrieveButton onClick={getDraft}>Retrieve Draft</RetrieveButton>
        <ResetButton onClick={clearAll}>Clear All</ResetButton>
      </UpperDiv>
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
          onChange={handleTagInput}
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
