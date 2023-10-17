/* eslint-disable react-refresh/only-export-components */
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useLoaderData, useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import BlogContent from "../components/BlogContent";
import { useNavigate } from "react-router-dom";

import {
  BasicButton,
  BasicLink,
  PrimaryColorSwitch,
  SecondaryTransparent,
  TertiaryColorSwitch,
} from "../assets/styles/Styles";
import { db } from "../firebase";

const BlogContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4rem;
  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
const MarkdownTitle = styled(Markdown)`
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryTransparent};
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 0.9rem;
  color: ${TertiaryColorSwitch};
  text-align: right;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1rem;
`;
const BackLink = styled(BasicLink)`
  align-self: flex-end;
  &:link,
  &:visited {
    color: ${TertiaryColorSwitch};
    text-shadow: 2px 2px ${SecondaryTransparent};
  }
  &:hover,
  &:active {
    text-shadow: 2px 2px transparent;
  }
`;
const StyledButton = styled(BasicButton)`
  align-self: flex-end;
  color: ${TertiaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryTransparent};
  &:hover,
  &:active,
  &:focus {
    text-shadow: 2px 2px transparent;
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

const Blog = ({ theme, setBlogToEdit }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const {
    id: blogID,
    time: blogTime,
    title: blogTitle,
    content: blogContent,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Blog ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const location = useLocation();
  const search = location.state?.search;

  const navigate = useNavigate();
  const blogData = useLoaderData();

  const editBlog = () => {
    setBlogToEdit(blogData);
    navigate("/editor");
  };
  const deleteBlog = async () => {
    await deleteDoc(doc(db, "blogs", blogID));
    navigate("/blogs");
    //user experience, loading page? error handle
  };
  return (
    <>
      <BlogContainer>
        <StyledDiv>
          <BackLink to={`/blogs${search}`} $theme={theme}>
            Back to blogs
          </BackLink>
          {authToken ? (
            <StyledButton $theme={theme} onClick={editBlog}>
              Edit
            </StyledButton>
          ) : null}
          {authToken ? (
            <StyledButton $theme={theme} onClick={deleteBlog}>
              Delete
            </StyledButton>
          ) : null}
        </StyledDiv>
        <MarkdownTitle $theme={theme}>{blogTitle}</MarkdownTitle>
        <StyledP $theme={theme}>{blogTime}</StyledP>
        <BlogContent theme={theme} blogContent={blogContent} />
      </BlogContainer>
    </>
  );
};
export default Blog;
