/* eslint-disable react-refresh/only-export-components */
import { doc, getDoc } from "firebase/firestore";
import Markdown from "react-markdown";
import { Link, useLoaderData } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";
import { db } from "../firebase";

const BlogContainer = styled.div`
  width: 80vw;
  height: 60vh;
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1000px) {
    width: 70vw;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${PrimaryColorSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${SecondaryColorSwitch};
    text-shadow: 2px 2px ${PrimaryColorSwitch};
  }
`;
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
`;
const MarkdownTitle = styled(Markdown)`
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const MarkdownContent = styled(Markdown)`
  color: ${ParagraphColorSwitch};
`;
const EditLink = styled(Link)`
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${SecondaryColorSwitch};
    text-shadow: 2px 2px ${PrimaryColorSwitch};
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
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};

const Blog = ({ theme }) => {
  const {
    time: blogTime,
    title: blogTitle,
    content: blogContent,
  } = useLoaderData();

  return (
    <BlogContainer>
      <StyledLink to="/blogs" $theme={theme}>
        Back to blogs
      </StyledLink>
      <StyledP $theme={theme}>{blogTime}</StyledP>
      <MarkdownTitle $theme={theme}>{blogTitle}</MarkdownTitle>
      <MarkdownContent $theme={theme}>{blogContent}</MarkdownContent>
      <EditLink $theme={theme} to="/login">
        Edit
      </EditLink>
    </BlogContainer>
  );
};
export default Blog;
