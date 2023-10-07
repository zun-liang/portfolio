/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs } from "firebase/firestore";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import {
  CursorPointerSwitch,
  HoverColorSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";
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
const Filter = styled.button`
  border: none;
  background-color: transparent;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${SecondaryColorSwitch};
  text-shadow: 1px 1px ${PrimaryColorSwitch};
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
  //will take over 100% width
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

export const loader = async () => {
  const querySnapshot = await getDocs(blogsCollection);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

//blogs don't show in order
//how to split blogs into pages
const Blogs = ({ theme }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const [searchParams, setSearchParams] = useSearchParams();
  const languageFilter = searchParams.get("language");
  console.log(languageFilter);
  const blogsArr = useLoaderData();
  const filteredBlogs = languageFilter
    ? blogsArr.filter((blog) => blog.tag.toLowerCase() === languageFilter)
    : blogsArr;
  const blogs = filteredBlogs.map((blog) => (
    <BlogContainer key={blog.id}>
      <StyledP $theme={theme}>{blog.time}</StyledP>
      <BlogLink to={encodeURIComponent(blog.id)} $theme={theme}>
        <StyledH2 $theme={theme}>
          {blog.title.split(" ").slice(1).join(" ")}
        </StyledH2>
      </BlogLink>
    </BlogContainer>
  ));

  const generateSearchParams = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  return (
    <BlogsContainer>
      <StyledH1 $theme={theme}>Blogs</StyledH1>
      <Filters>
        <Filter
          onClick={() => generateSearchParams("language", "html")}
          $theme={theme}
        >
          HTML
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "css")}
          $theme={theme}
        >
          CSS
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "javascript")}
          $theme={theme}
        >
          Javascript
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "react")}
          $theme={theme}
        >
          React
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "router")}
          $theme={theme}
        >
          Router
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "design")}
          $theme={theme}
        >
          Design
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", "other")}
          $theme={theme}
        >
          Other
        </Filter>
        <Filter
          onClick={() => generateSearchParams("language", null)}
          $theme={theme}
        >
          Clear Filter
        </Filter>
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
