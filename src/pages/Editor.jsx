import { faFileImport, faFloppyDisk, faHashtag, faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";
import { deleteDoc, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { marked } from "marked";
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";

import Crumple from "../assets/sounds/crumple.mp3";
import { BasicInput, HighlightSwitch, PointerSwitch, PrimarySecondary, TertiaryHighlight, TertiarySecondary } from "../assets/styles/Styles";
import BackButton from "../components/BackButton";
import Post from "../components/Post";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { SoundContext } from "../contexts/SoundContext";
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
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${TertiaryHighlight};
  &:hover {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
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
const StyledTagIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${TertiaryHighlight};
`;
const TagInput = styled(BasicInput)`
  justify-self: start;
  width: 12rem;
  height: 1.5rem;
  padding: 0 5px;
  margin-left: -0.7rem;
  border: 1px solid ${TertiarySecondary};
`;
const StyledSaveIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  color: ${TertiaryHighlight};
  &:hover {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
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
  playSwoosh,
}) => {
  const playPick = useContext(PlayPickContext);
  const sound = useContext(SoundContext);
  const [playCrumple] = useSound(Crumple, { soundEnabled: sound });
  const navigate = useNavigate();
  const [showPost, setShowPost] = useState(false);
  const [getDraftResponse, setGetDraftResponse] = useState(true);
  const [invalidPost, setInvalidPost] = useState(false);

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
  const content = marked.parse(blogSplit.slice(1).join("\n") || "");
  const tag = tagInput.toString().toLowerCase().split(" ");

  /* === post a blog to firestore === */

  const blogObj = {
    id: id,
    timestamp: timestamp,
    title: title,
    overview: overview,
    content: content,
    tag: tag,
  };

  const retrievedId = blogToEdit?.id;
  const retrievedTimestamp = blogToEdit?.timestamp;

  const updatedBlogObj = {
    id: retrievedId,
    timestamp: retrievedTimestamp,
    updatedTimestamp: timestamp,
    title: title,
    overview: overview,
    content: content,
    tag: tag,
  };

  const clearAll = () => {
    setBlog("");
    setTagInput("");
    setBlogToEdit(null);
    setTagsToEdit(null);
    setGetDraftResponse(true);
    setInvalidPost(false);
  };

  const post = async () => {
    try {
      if (title.trim() !== "" && content.trim() !== "") {
        playSwoosh();
        if (blogToEdit) {
          await updateDoc(doc(db, "blogs", retrievedId), updatedBlogObj);
          setBlogToEdit(null);
          setTagsToEdit(null);
        } else if (draft) {
          await setDoc(doc(db, "blogs", id), blogObj);
          await deleteDoc(doc(db, "drafts", "draft"));
          setDraft(null);
        } else {
          await setDoc(doc(db, "blogs", id), blogObj);
        }
        setShowPost(true);
        clearAll();
      } else {
        setInvalidPost(true);
      }
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
    overview: overview,
    content: content,
    tag: tag,
  };

  const updatedDraft = {
    id: "draft",
    timestamp: timestamp,
    title: title,
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
      setShowPost(true);
      clearAll();
    } catch (error) {
      console.error("Error while saving draft:", error);
      throw new Error("Something went wrong while attempting to save draft.");
    }
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

  const reset = () => {
    playCrumple();
    clearAll();
  };

  const handleClick = () => {
    navigate("/blogs");
    playPick();
  };

  useEffect(() => {
    document.title = "Editor ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  if (showPost) return <Post draft={draft} setShowPost={setShowPost} />;
  return (
    <EditorContainer>
      <UpperDiv>
        <UserProfile />
        <UpdateProfile />
        <StyledFontAwesomeIcon
          icon={faFileImport}
          aria-label="get draft"
          onClick={getDraft}
        />
        <StyledFontAwesomeIcon
          icon={faTrash}
          aria-label="reset"
          onClick={reset}
        />
      </UpperDiv>
      <StyledMDEditor
        value={blog}
        onChange={setBlog}
        aria-label="## blog title \n\n blog body..."
        textareaProps={{
          placeholder: "## blog title \n\n blog body...",
        }}
      />
      <StyledDiv>
        <StyledTagIcon aria-label="hash tag" icon={faHashtag} />
        <TagInput
          id="tag"
          name="tag"
          value={tagInput}
          onChange={handleTagInput}
          aria-label="tags separate by space..."
          placeholder="tags separate by space..."
        />
        <BackButton handleClick={handleClick} />
        <StyledSaveIcon
          icon={faFloppyDisk}
          onClick={saveDraft}
          aria-label="save draft"
        />
        <StyledFontAwesomeIcon icon={faPaperPlane} onClick={post} aria-label="post"/>
      </StyledDiv>
      {!getDraftResponse && <StyledP>No draft found.</StyledP>}
      {invalidPost && (
        <StyledP>Please fill in blog title and blog body before post.</StyledP>
      )}
    </EditorContainer>
  );
};

export default Editor;
