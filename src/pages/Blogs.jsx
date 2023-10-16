/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs, orderBy, query } from "firebase/firestore";
import { memo, useEffect, useMemo } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Markdown from "react-markdown";

import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  TertiaryColorSwitch,
} from "../assets/styles/Styles";
import { blogsCollection } from "../firebase";

const BlogsContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
const BlogLink = styled(Link)`
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
`;
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Filters = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;
const Filter = styled.button`
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1.1rem;
  color: ${TertiaryColorSwitch};
  &:hover {
    background-color: ${PrimaryColorSwitch};
  }
`;
const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${TertiaryColorSwitch};
`;
const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryColorSwitch};
`;
const MarkdownOverview = styled(Markdown)`
  color: ${ParagraphColorSwitch};
  line-height: 1.5;
`;
const StyledLink = styled(Link)`
  //will take over 100% width
  align-self: flex-end;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  &:link,
  &:visited {
    color: ${TertiaryColorSwitch};
  }
  &:hover,
  &:active {
    color: ${TertiaryColorSwitch};
    background-color: ${PrimaryColorSwitch};
  }
`;

//how to cache the data so it doesn't need to get data everytime;
export const loader = async () => {
  //console.log("data fetched");
  try {
    const blogsRef = blogsCollection;
    const q = query(blogsRef, orderBy("timestamp", "desc"));
    //blogs showing order is still werid
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//pagination
const Blogs = ({ theme }) => {
  //console.log("blogs rendered");
  useEffect(() => {
    document.title = "Blogs ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const authToken = sessionStorage.getItem("Auth Token");
  const [searchParams, setSearchParams] = useSearchParams();
  const languageFilter = searchParams.get("language");
  const blogsArr = useLoaderData();
  const filteredBlogs = languageFilter
    ? blogsArr.filter((blog) => blog.tag.toLowerCase() === languageFilter)
    : blogsArr;
  const blogs = filteredBlogs.map((blog) => (
    <BlogLink
      key={blog.id}
      to={encodeURIComponent(blog.id)}
      state={{ search: `?${searchParams.toString()}` }}
      $theme={theme}
    >
      <BlogContainer>
        <StyledH2 $theme={theme}>
          {blog.title.split(" ").slice(1).join(" ")}
        </StyledH2>
        <Time $theme={theme}>{blog.time}</Time>
        <MarkdownOverview $theme={theme}>{blog.overview}</MarkdownOverview>
      </BlogContainer>
    </BlogLink>
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
          onClick={() => generateSearchParams("language", null)}
          $theme={theme}
        >
          All
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

export default memo(Blogs);
//looks like memo can not stop many rerendering;
//really don't like the link color of overview
