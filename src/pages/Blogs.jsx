/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { getDocs, orderBy, query } from "firebase/firestore";
import { Suspense, useContext, useEffect } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

import {
  BasicButton,
  OpaqueSwitch,
  PointerSwitch,
  PrimarySecondary,
  PrimarySwitch,
  SecondaryTransparent,
  TertiaryHighlight,
  TertiarySecondary,
} from "../assets/styles/Styles";
import BlogOverview from "../components/BlogOverview";
import BlogsLoading from "../components/BlogsLoading";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { blogsCollection } from "../firebase";

const BlogsContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 55vw;
    gap: 3rem;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
`;
const BlogLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  cursor: ${PointerSwitch};
`;
const ButtonsContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  ${StyledDiv}:hover & {
    display: flex;
    gap: 1.5rem;
  }
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
  text-shadow: 1px 1px ${SecondaryTransparent};
  border: 1px solid transparent;
  &:hover,
  &:active,
  &:focus {
    border: 1px dashed ${TertiarySecondary};
  }
  @media (min-width: 1024px) {
    &:hover,
    &:active {
      border: 1px dashed ${PrimarySwitch};
    }
  }
`;
const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${TertiaryHighlight};
  text-shadow: 1px 1px ${SecondaryTransparent};
  & > span {
    font-style: italic;
  }
`;
const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimarySwitch};
`;
const StyledP = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${TertiaryHighlight};
  font-weight: 700;
  background-color: ${OpaqueSwitch};
  border-radius: 1rem;
  padding: 1.5rem;
  & > a:link,
  a:visited {
    color: ${TertiaryHighlight};
    text-decoration: underline wavy;
    text-underline-offset: 4px;
  }
  & a:hover,
  a:active {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
  }
  @media (min-width: 1350px) {
    line-height: 2;
  }
`;

export const loader = async () => {
  try {
    const q = query(blogsCollection, orderBy("timestamp", "desc"));
    const querySnapshot = getDocs(q);
    return defer({ docs: querySnapshot });
  } catch (error) {
    console.error("Error while retrieving blogs:", error);
    throw new Error(
      "Something went wrong while attempting to retrieve blogs data."
    );
  }
};

const Blogs = ({ playPageTurn, setBlogToEdit, setTagsToEdit }) => {
  const playPick = useContext(PlayPickContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const loaderData = useLoaderData();

  useEffect(() => {
    document.title = "Blogs ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
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

  return (
    <BlogsContainer>
      <Suspense fallback={<BlogsLoading />}>
        <Await resolve={loaderData.docs}>
          {(docs) => {
            let blogsArr = [];
            docs.forEach((doc) => {
              blogsArr.push(doc.data());
            });
            const filters = blogsArr
              .map((blog) => blog.tag)
              .flat()
              .sort();
            const distinctFilters = [];
            for (let i = 0; i < filters.length; i++) {
              if (filters.indexOf(filters[i]) === i && filters[i] !== "") {
                distinctFilters.push(filters[i]);
              }
            }
            const filtersToDisplay = distinctFilters.map((filter) => (
              <Filter
                key={filter}
                onClick={() => generateSearchParams("category", filter)}
              >
                {filter === "html"
                  ? "HTML"
                  : filter === "css"
                  ? "CSS"
                  : `${filter[0]?.toUpperCase()}${filter.slice(1)}`}
              </Filter>
            ));
            const filteredBlogs = categoryFilter
              ? blogsArr.filter((blog) => blog.tag.includes(categoryFilter))
              : blogsArr;
            const blogs = filteredBlogs.map((blog) => (
              <StyledDiv key={blog.id}>
                <BlogLink
                  to={encodeURIComponent(blog.id)}
                  state={{ search: `?${searchParams.toString()}` }}
                  onClick={playPageTurn}
                >
                  <BlogContainer>
                    <StyledH2>
                      {blog.title.split(" ").slice(1).join(" ")}
                    </StyledH2>
                    <Time>
                      {blog.timestamp?.toDate().toLocaleString()}
                      {blog.updatedTimestamp && (
                        <span>
                          , edited on{" "}
                          {blog.updatedTimestamp?.toDate().toLocaleString()}
                        </span>
                      )}
                    </Time>
                    <BlogOverview overview={blog.overview} />
                  </BlogContainer>
                </BlogLink>
                <ButtonsContainer>
                  <EditButton
                    blogData={blog}
                    blogTag={blog.tag}
                    setBlogToEdit={setBlogToEdit}
                    setTagsToEdit={setTagsToEdit}
                  />
                  <DeleteButton blogID={blog.id} />
                </ButtonsContainer>
              </StyledDiv>
            ));
            return (
              <>
                <Filters>
                  {filtersToDisplay}
                  <Filter
                    onClick={() => generateSearchParams("category", null)}
                  >
                    All
                  </Filter>
                </Filters>

                {blogs}
              </>
            );
          }}
        </Await>
        <StyledP>
          If Google services are not available in your area or this page is
          taking longer than expected, please click on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://zun-liang.github.io/alt-blogs/"
          >
            this link
          </a>{" "}
          to read my blogs <span>(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ</span>
        </StyledP>
      </Suspense>
    </BlogsContainer>
  );
};

export default Blogs;
