/* eslint-disable react-refresh/only-export-components */
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  HighlightSwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import BackButton from "../components/BackButton";
import BlogContent from "../components/BlogContent";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { db } from "../firebase";
import LikeButton from "../components/LikeButton";
import CommentButton from "../components/CommentButton";
import ShareButton from "../components/ShareButton";
import Comments from "../components/Comments";
import CommentInterface from "../components/CommentInterface";

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
  text-shadow: -2px -2px ${SecondaryParagraph};
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 0.9rem;
  color: ${TertiaryParagraph};
  text-align: right;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1rem;
`;
const TagsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Tag = styled.p`
  color: ${HighlightSwitch};
`;
const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media (min-width: 1350px) {
    gap: 3rem;
  }
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
  const location = useLocation();
  const navigate = useNavigate();
  const search = location.state?.search;
  const ref = useRef(search); //to keep the search value
  const newSearch = ref.current;
  const [comment, setComment] = useState(false);
  const blogData = useLoaderData();

  const {
    id: blogID,
    time: blogTime,
    title: blogTitle,
    content: blogContent,
    tag: blogTag,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Blog ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  const tags =
    typeof blogTag !== "object"
      ? null
      : blogTag.map(
          (tag) =>
            tag && (
              <Tag key={tag}>
                {tag === "html"
                  ? `# ${tag.toUpperCase()}`
                  : tag === "css"
                  ? `# ${tag.toUpperCase()}`
                  : `# ${tag[0].toUpperCase()}${tag.slice(1)}`}
              </Tag>
            )
        );

  const handleClick = () => {
    navigate(`/blogs${newSearch}`);
    playPick();
  };
  return (
    <BlogContainer>
      <StyledDiv>
        <BackButton handleClick={handleClick} />
        <EditButton
          setBlogToEdit={setBlogToEdit}
          setTagsToEdit={setTagsToEdit}
          blogData={blogData}
          blogTag={blogTag}
        />
        <DeleteButton blogID={blogID} />
      </StyledDiv>
      <MarkdownTitle>{blogTitle}</MarkdownTitle>
      <StyledP>{blogTime}</StyledP>
      <BlogContent blogContent={blogContent} />
      <TagsContainer>{tags}</TagsContainer>
      <IconsContainer>
        <LikeButton />
        <CommentButton comment={comment} setComment={setComment} />
        <ShareButton />
      </IconsContainer>
      {comment && <CommentInterface setComment={setComment} />}
      <Comments />
    </BlogContainer>
  );
};

export default Blog;
