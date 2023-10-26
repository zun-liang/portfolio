/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { memo, useContext, useEffect, useMemo } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

import {
  BasicButton,
  BasicLink,
  PointerSwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  SecondaryPrimary,
  TertiaryPrimary,
  TertiarySecondary,
} from "../assets/styles/Styles";
import BlogOverview from "../components/BlogOverview";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { blogsCollection, db } from "../firebase";

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
  cursor: ${PointerSwitch};
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
  color: ${TertiaryPrimary};
`;
const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryTertiary};
  text-shadow: 1px 0px ${SecondaryParagraph};
`;
const StyledButton = styled(Filter)`
  align-self: flex-end;
`;
const StyledLink = styled(BasicLink)`
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
    console.error("Error while retrieving blogs:", error);
    throw new Error(
      "Something went wrong while attempting to retrieve blogs data."
    );
  }
};

const Blogs = ({ setDraft, playPageTurn, setTagsToEdit }) => {
  const playPick = useContext(PlayPickContext);
  const loggedin = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const blogsArr = useLoaderData();

  const filteredBlogs = categoryFilter
    ? blogsArr.filter((blog) => blog.tag[0] === categoryFilter)
    : blogsArr;

  const blogs = filteredBlogs.map((blog) => (
    <BlogLink
      key={blog.id}
      to={encodeURIComponent(blog.id)}
      state={{ search: `?${searchParams.toString()}` }}
      onClick={playPageTurn}
    >
      <BlogContainer>
        <StyledH2>{blog.title.split(" ").slice(1).join(" ")}</StyledH2>
        <Time>{blog.time}</Time>
        <BlogOverview overview={blog.overview} />
      </BlogContainer>
    </BlogLink>
  ));

  useEffect(() => {
    document.title = "Blogs ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

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

  const getDraft = async () => {
    try {
      playPick();
      const docSnap = await getDoc(doc(db, "drafts", "draft"));
      const data = docSnap.data();
      setDraft(data);
      setTagsToEdit(data?.tag);
      navigate("/editor");
    } catch (error) {
      console.error("Error while retrieving draft", error);
      throw new Error("Something went wrong while retrieving draft.");
    }
  };

  return (
    <BlogsContainer>
      <Filters>
        <Filter onClick={() => generateSearchParams("category", "html")}>
          HTML
        </Filter>
        <Filter onClick={() => generateSearchParams("category", "css")}>
          CSS
        </Filter>
        <Filter onClick={() => generateSearchParams("category", "javascript")}>
          Javascript
        </Filter>
        <Filter onClick={() => generateSearchParams("category", "react")}>
          React
        </Filter>
        <Filter onClick={() => generateSearchParams("category", "router")}>
          Router
        </Filter>
        <Filter onClick={() => generateSearchParams("category", "design")}>
          Design
        </Filter>
        <Filter onClick={() => generateSearchParams("category", null)}>
          All
        </Filter>
      </Filters>
      {blogs}
      {loggedin ? (
        <StyledButton onClick={getDraft}>Go to Editor</StyledButton>
      ) : (
        <StyledLink to="/login" onClick={playPick}>
          Log in to edit
        </StyledLink>
      )}
    </BlogsContainer>
  );
};

export default memo(Blogs);
//looks like memo can not stop many rerendering;
// a blog can contain a couple tags, how to work with it
//how to dynamically set up tags
//select different tags vs the same blog contain different tags
//pagination
