/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";
import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { marked } from "marked";
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ResetIcon } from "../assets/images/delete.svg";
import { ReactComponent as TagIcon } from "../assets/images/hash.svg";
import { ReactComponent as SaveIcon } from "../assets/images/save.svg";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import { ReactComponent as SendIcon } from "../assets/images/send.svg";
import {
  BasicInput,
  HighlightSwitch,
  PointerSwitch,
  PrimaryHighlight,
  PrimarySwitch,
  TertiaryParagraph,
  TertiarySecondary,
} from "../assets/styles/Styles";
import BackButton from "../components/BackButton";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";
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
  grid-template-columns: 1fr 2rem 2rem 2rem;
  justify-items: center;
  align-items: center;
  column-gap: 1rem;
`;
const StyledSearchIcon = styled(SearchIcon)`
  width: 1.3rem;
  height: 1.3rem;
  & > path {
    fill: ${TertiaryParagraph};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > path {
      fill: ${PrimarySwitch};
    }
  }
`;
const StyledResetIcon = styled(ResetIcon)`
  width: 1.3rem;
  height: 1.3rem;
  & > g > g {
    fill: ${TertiaryParagraph};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g {
      fill: ${PrimarySwitch};
    }
  }
`;
const StyledDiv = styled.div`
  width: 100%;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1.5rem 1fr 3rem 2rem 2rem;
  justify-items: center;
  align-items: center;
  column-gap: 1rem;
`;
const StyledTagIcon = styled(TagIcon)`
  width: 1.2rem;
  height: 1.2rem;
  & > path {
    stroke: ${PrimaryHighlight};
  }
`;
const TagInput = styled(BasicInput)`
  justify-self: start;
  width: 10rem;
  height: 1.5rem;
  padding: 0 5px;
  margin-left: -0.7rem;
  border: 1px solid ${TertiarySecondary};
`;
const StyledSaveIcon = styled(SaveIcon)`
  width: 1.3rem;
  height: 1.3rem;
  & > path {
    fill: ${TertiaryParagraph};
  }
  &:hover {
    cursor: ${PointerSwitch};
    > path {
      fill: ${PrimarySwitch};
    }
  }
`;
const StyledSendIcon = styled(SendIcon)`
  width: 1.6rem;
  height: 1.6rem;
  & > path {
    stroke: ${TertiaryParagraph};
  }
  &:hover {
    cursor: ${PointerSwitch};
    > path {
      stroke: ${PrimarySwitch};
    }
  }
`;
const StyledP = styled.p`
  align-self: flex-end;
  font-family: "Black Ops One", sans-serif;
  color: ${HighlightSwitch};
`;

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
  const [getDraftResponse, setGetDraftResponse] = useState(true);

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
    nanoid();
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
        setDraft(true);
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
      setGetDraftResponse(false);
      console.error("Error while retrieving draft", error);
      throw new Error("Something went wrong while retrieving draft.");
    }
  };

  const handleClick = () => {
    navigate("/blogs");
    playPick();
  };

  useEffect(() => {
    document.title = "Editor ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <EditorContainer>
      <UpperDiv>
        <UserProfile />
        <UpdateProfile />
        <StyledSearchIcon onClick={getDraft} />
        <StyledResetIcon onClick={clearAll} />
      </UpperDiv>
      <StyledMDEditor
        value={blog}
        onChange={setBlog}
        textareaProps={{
          placeholder: "## blog title \n\n blog body...",
        }}
      />
      <StyledDiv>
        <StyledTagIcon />
        <TagInput
          id="tag"
          name="tag"
          value={tagInput}
          onChange={handleTagInput}
          placeholder="tag end with space..."
        />
        <BackButton handleClick={handleClick} />
        <StyledSaveIcon onClick={saveDraft} />
        <StyledSendIcon onClick={post} />
      </StyledDiv>
      {!getDraftResponse && <StyledP>No draft found.</StyledP>}
    </EditorContainer>
  );
};

export default Editor;
