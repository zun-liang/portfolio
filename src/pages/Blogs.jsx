/* eslint-disable react/prop-types */
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  CursorPointerSwitch,
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
  //color strange
  //seem to have to do with onsnapshot, one step slower
`;
const BlogLink = styled(Link)`
  //text-decoration: none;
  //will take over 100% width
  display: contents;
  border: 1px solid red;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimaryColorSwitch};
  }
  cursor: ${CursorPointerSwitch};
`;
const StyledH2 = styled.h2`
  font-size: 1.2rem;
  font-family: "Black Ops One", sans-serif;
  //color strange
  //seem to have to do with onsnapshot, one step slower
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
`;
//blogs don't show in order
const Blogs = ({ theme, authToken }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(blogsCollection, function (snapshot) {
      const blogsArr = snapshot.docs.map((doc) => (
        <BlogContainer key={doc.id}>
          <StyledP $theme={theme}>{doc.data().time}</StyledP>
          <BlogLink to={doc.id} $theme={theme}>
            <StyledH2 $theme={theme}>
              {doc.data().title.split(" ").slice(1).join(" ")}
            </StyledH2>
          </BlogLink>
        </BlogContainer>
      ));
      setBlogs(blogsArr);
    });
    return unsubscribe;
  }, []);

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
          Log in
        </StyledLink>
      )}
    </BlogsContainer>
  );
};

export default Blogs;
