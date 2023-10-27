/* eslint-disable react-refresh/only-export-components */
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { useLoaderData, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BasicButton,
  BasicLink,
  PrimarySecondary,
  PrimaryTertiary,
  SecondaryParagraph,
  SecondaryPrimary,
  TertiarySecondary,
} from "../assets/styles/Styles";
import BlogContent from "../components/BlogContent";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { db } from "../firebase";

const BlogContainer = styled.div`
  width: 80vw;
  min-height: 67vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4rem;
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
const MarkdownTitle = styled(Markdown)`
  color: ${PrimaryTertiary};
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  text-shadow: 1px 1px ${SecondaryParagraph};
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 0.9rem;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  text-align: right;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
`;
const BackLink = styled(BasicLink)`
  position: relative;
  &:link,
  &:visited {
    color: ${TertiarySecondary};
    text-shadow: 1px 1px ${SecondaryPrimary};
    top: 0;
    transition: top 0.3s ease-out;
  }
  &:hover,
  &:active {
    top: 5px;
    transition: top 0.3s ease-in;
  }
`;
const StyledButton = styled(BasicButton)`
  align-self: flex-end;
  padding: 0;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  position: relative;
  top: 0;
  transition: top 0.3s ease-out;
  &:hover,
  &:active,
  &:focus {
    top: 5px;
    transition: top 0.3s ease-in;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Tag = styled.p`
  color: ${PrimarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
`;

export const loader = async ({ params }) => {
  const { title } = params;
  const docRef = doc(db, "blogs", title);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such blog!");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw new Error(
      "Something went wrong while attempting to retrieve blog data."
    );
  }
};

const Blog = ({ setBlogToEdit, setTagsToEdit }) => {
  const playPick = useContext(PlayPickContext);
  const loggedin = useContext(AuthContext);
  const location = useLocation();
  const search = location.state?.search;
  const ref = useRef(search); //to keep the search value
  const newSearch = ref.current;
  const navigate = useNavigate();
  const blogData = useLoaderData();
  const {
    id: blogID,
    time: blogTime,
    title: blogTitle,
    content: blogContent,
    tag: blogTag,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Blog ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  const editBlog = () => {
    playPick();
    setBlogToEdit(blogData);
    setTagsToEdit(blogTag);
    navigate("/editor");
  };

  const deleteBlog = async () => {
    try {
      playPick();
      await deleteDoc(doc(db, "blogs", blogID));
      navigate("/blogs");
    } catch (error) {
      console.error("Error while deleting blog:", error);
      throw new Error("Something went wrong while deleting blog");
    }
  };

  const tags =
    typeof blogTag !== "object"
      ? null
      : blogTag.map((tag) =>
          tag ? (
            <Tag key={tag}>
              {tag === "html"
                ? `# ${tag.toUpperCase()}`
                : tag === "css"
                ? `# ${tag.toUpperCase()}`
                : `# ${tag[0].toUpperCase()}${tag.slice(1)}`}
            </Tag>
          ) : null
        );

  return (
    <BlogContainer>
      <StyledDiv>
        <BackLink to={`/blogs${newSearch}`} onClick={playPick}>
          Back to blogs
        </BackLink>
        {loggedin ? <StyledButton onClick={editBlog}>Edit</StyledButton> : null}
        {loggedin ? (
          <StyledButton onClick={deleteBlog}>Delete</StyledButton>
        ) : null}
      </StyledDiv>
      <MarkdownTitle>{blogTitle}</MarkdownTitle>
      <StyledP>{blogTime}</StyledP>
      <BlogContent blogContent={blogContent} />
      <TagsContainer>{tags}</TagsContainer>
    </BlogContainer>
  );
};

export default Blog;
