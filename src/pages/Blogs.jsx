/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs, orderBy, query } from "firebase/firestore";
import { useContext, useEffect } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as EditIcon } from "../assets/images/edit.svg";
import { ReactComponent as LoginIcon } from "../assets/images/log-in.svg";
import {
  BasicButton,
  PointerSwitch,
  PrimarySecondary,
  PrimaryTertiary,
  SecondaryPrimary,
  TertiaryDot,
  TertiarySecondary,
} from "../assets/styles/Styles";
import BlogOverview from "../components/BlogOverview";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { blogsCollection } from "../firebase";

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
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const BlogLink = styled(Link)`
  width: 100%;
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
  color: ${TertiarySecondary};
`;
const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryTertiary};
`;
const StyledLoginIcon = styled(LoginIcon)`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  & > g > g {
    fill: ${TertiaryDot};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g {
      fill: ${PrimarySecondary};
    }
  }
`;
const StyledEditIcon = styled(EditIcon)`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  & > g > g > g > path,
  & > g > g > g > polygon {
    stroke: ${TertiaryDot};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g > g > path,
    & > g > g > g > polygon {
      stroke: ${PrimarySecondary};
    }
  }
`;

//how to cache the data so it doesn't need to get data everytime;
export const loader = async () => {
  try {
    const q = query(blogsCollection, orderBy("timestamp", "desc"));
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

const Blogs = ({ playPageTurn, setBlogToEdit, setTagsToEdit }) => {
  const playPick = useContext(PlayPickContext);
  const loggedin = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const blogsArr = useLoaderData();
  const navigate = useNavigate();

  const filteredBlogs = categoryFilter
    ? blogsArr.filter((blog) => blog.tag[0] === categoryFilter)
    : blogsArr;

  const blogs = filteredBlogs.map((blog) => (
    <StyledDiv key={blog.id}>
      <BlogLink
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
      <EditButton
        blogData={blog}
        blogTag={blog.tag}
        setBlogToEdit={setBlogToEdit}
        setTagsToEdit={setTagsToEdit}
      />
      <DeleteButton blogID={blog.id} />
    </StyledDiv>
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

  const goToEditor = () => {
    playPick();
    navigate("/editor");
  };
  const login = () => {
    playPick();
    navigate("/login");
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
        <StyledEditIcon onClick={goToEditor} />
      ) : (
        <StyledLoginIcon onClick={login} />
      )}
    </BlogsContainer>
  );
};

export default Blogs;
//looks like memo can not stop many rerendering;
// a blog can contain a couple tags, how to work with it
//how to dynamically set up tags
//select different tags vs the same blog contain different tags
//pagination
