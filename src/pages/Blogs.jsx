/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs } from "firebase/firestore";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

import { CursorPointerSwitch, HoverColorSwitch, ParagraphColorSwitch, PrimaryColorSwitch, SecondaryColorSwitch } from "../assets/styles/Styles";
import { blogsCollection } from "../firebase";

const BlogsContainer = styled.div`
  width: 80vw;
  min-height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1000px) {
    width: 70vw;
  }
`;
const BlogContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledH1 = styled.h1`
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const Filter = styled(Link)`
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
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
`;
const BlogLink = styled(Link)`
  text-underline-offset: 3px;
  border: 1px solid blue;
  //will take over 100% width
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimaryColorSwitch};
  }
  cursor: ${CursorPointerSwitch};
`;
const StyledH2 = styled.h2`
  display: inline;
  border: 1px solid red;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
`;
const StyledLink = styled(Link)`
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
  &:hover {
    background-color: ${HoverColorSwitch};
  }
`;

export const loader = async () => {
  const querySnapshot = await getDocs(blogsCollection);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

//blogs don't show in order
const Blogs = ({ theme }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const blogsArr = useLoaderData();
  const blogs = blogsArr.map((blog) => (
    <BlogContainer key={blog.id}>
      <StyledP $theme={theme}>{blog.time}</StyledP>
      <BlogLink to={blog.id} $theme={theme}>
        <StyledH2 $theme={theme}>
          {blog.title.split(" ").slice(1).join(" ")}
        </StyledH2>
      </BlogLink>
    </BlogContainer>
  ));

  return (
    <BlogsContainer>
      <StyledH1 $theme={theme}>Blogs</StyledH1>
      <Filters>
        <Filter $theme={theme}>HTML</Filter>
        <Filter $theme={theme}>CSS</Filter>
        <Filter $theme={theme}>Javascript</Filter>
        <Filter $theme={theme}>React</Filter>
        <Filter $theme={theme}>Router</Filter>
        <Filter $theme={theme}>Design</Filter>
      </Filters>
      {blogs}
      {authToken ? (
        <StyledLink $theme={theme} to="/editor">
          Go to Editor
        </StyledLink>
      ) : (
        <StyledLink $theme={theme} to="/login">
          Log in to edit
        </StyledLink>
      )}
    </BlogsContainer>
  );
};

export default Blogs;
