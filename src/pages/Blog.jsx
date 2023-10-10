/* eslint-disable react-refresh/only-export-components */
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { Link, useLoaderData, useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
  TertiaryColorSwitch,
} from "../assets/styles/Styles";
import { db } from "../firebase";

const BlogContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
const MarkdownTitle = styled(Markdown)`
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  text-align: center;
`;
const StyledP = styled.p`
  color: ${TertiaryColorSwitch};
  font-weight: 500;
  text-align: right;
`;
const MarkdownContent = styled(Markdown)`
  color: ${ParagraphColorSwitch};
  line-height: 1.3;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
`;
const BackLink = styled(Link)`
  align-self: flex-end;
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1.2rem;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${TertiaryColorSwitch};
    text-shadow: 2px 2px
      ${({ $theme }) =>
        $theme ? "var(--light-secondary)" : "var(--dark-primary)"};
  }
`;
const ActionLink = styled(BackLink)`
  font-size: 1rem;
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
  const authToken = sessionStorage.getItem("Auth Token");
  const {
    time: blogTime,
    title: blogTitle,
    content: blogContent,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Blog ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const location = useLocation();
  const search = location.state?.search;
  return (
    <BlogContainer>
      <StyledDiv>
        <BackLink to={`/blogs${search}`} $theme={theme}>
          Back to blogs
        </BackLink>
        {authToken ? (
          <ActionLink $theme={theme} to="/editor">
            Edit
          </ActionLink>
        ) : null}
        {authToken ? (
          <ActionLink $theme={theme} to="/editor">
            Delete
          </ActionLink>
        ) : null}
      </StyledDiv>
      <MarkdownTitle $theme={theme}>{blogTitle}</MarkdownTitle>
      <StyledP $theme={theme}>{blogTime}</StyledP>
      <MarkdownContent $theme={theme}>{blogContent}</MarkdownContent>
    </BlogContainer>
  );
};
export default Blog;
