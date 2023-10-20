/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs, orderBy, query, getDoc, doc } from "firebase/firestore";
import { memo, useEffect, useMemo } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import {
  BasicLink,
  BasicButton,
  CursorPointerSwitch,
  TertiarySecondary,
  TertiaryColorSwitch,
  PrimaryTertiary,
  SecondaryPrimary,
  SecondaryParagraph,
} from "../assets/styles/Styles";
import { db, blogsCollection } from "../firebase";
import BlogOverview from "../components/BlogOverview";

const BlogsContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
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
  margin: 1rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;
const Filter = styled(BasicButton)`
  font-size: 1.1rem;
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
const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${TertiaryColorSwitch};
`;
const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryTertiary};
  text-shadow: 1px 1px ${SecondaryParagraph};
`;
const StyledButton = styled(Filter)`
  align-self: flex-end;
`;
const StyledLink = styled(BasicLink)`
  //will take over 100% width
  align-self: flex-end;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
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

//how to cache the data so it doesn't need to get data everytime;
export const loader = async () => {
  //console.log("data fetched");
  try {
    const blogsRef = blogsCollection;
    const q = query(blogsRef, orderBy("timestamp", "desc"));
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
const Blogs = ({ theme, setDraft, playPick, playPageTurn }) => {
  //console.log("blogs rendered");
  useEffect(() => {
    document.title = "Blogs ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
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
      onClick={playPageTurn}
    >
      <BlogContainer>
        <StyledH2 $theme={theme}>
          {blog.title.split(" ").slice(1).join(" ")}
        </StyledH2>
        <Time $theme={theme}>{blog.time}</Time>
        <BlogOverview theme={theme} overview={blog.overview} />
      </BlogContainer>
    </BlogLink>
  ));

  const generateSearchParams = (key, value) => {
    playPick();
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };
  const navigate = useNavigate();
  const getDraft = async () => {
    playPick();
    const docSnap = await getDoc(doc(db, "drafts", "draft"));
    const data = docSnap.data();
    setDraft(data);
    navigate("/editor");
    //error handle
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
        <StyledButton $theme={theme} onClick={getDraft}>
          Go to Editor
        </StyledButton>
      ) : (
        <StyledLink $theme={theme} to="/login" onClick={playPick}>
          Log in to edit
        </StyledLink>
      )}
    </BlogsContainer>
  );
};

export default memo(Blogs);
//looks like memo can not stop many rerendering;
// a blog can contain a couple tags, how to work with it
