/* eslint-disable react-refresh/only-export-components */
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useLoaderData, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { BasicButton, BasicLink, PrimaryTertiary, SecondaryParagraph, SecondaryPrimary, TertiaryColorSwitch, TertiarySecondary } from "../assets/styles/Styles";
import BlogContent from "../components/BlogContent";
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
  color: ${PrimaryTertiary};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 1px 1px ${SecondaryParagraph};
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
  &:hover,
  &:active,
  &:focus {
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

const Blog = ({ theme, setBlogToEdit, playPick }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const {
    id: blogID,
    time: blogTime,
    title: blogTitle,
    content: blogContent,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Blog ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
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
  useEffect(() => {
    document.body.scrollTo({ top: 0});
  }, []);
  return (
    <>
      <BlogContainer>
        <StyledDiv>
          <BackLink to={`/blogs${search}`} $theme={theme} onClick={playPick}>
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
//if chose in page link and select back, it will go to blogsundefined, which is 404 of course
