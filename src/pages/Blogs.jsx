/* eslint-disable react/prop-types */
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CursorPointerSwitch, ParagraphColorSwitch, PrimaryColorSwitch, SecondaryColorSwitch } from "../assets/styles/Styles";
import { blogsCollection } from "../firebase";

const BlogsContainer = styled.div`
  width: 80vw;
  height: 60vh;
  margin: 0 auto;
  border: 1px solid red;
  @media (min-width: 1000px) {
    width: 70vw;
  }
`;
const BlogContainer = styled.div``;
const StyledH1 = styled.h1`
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const StyledH2 = styled.h2`
  color: ${SecondaryColorSwitch};
  text-shadow: 2px 2px ${PrimaryColorSwitch};
  //border: 1px solid red;
  //color strange
  //seem to have to do with onsnapshot, one step slower
`;
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
  border: 1px solid red;
`;
const StyledLink = styled(Link)`
  width: 4.5rem;
  height: 2rem;
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

const Blogs = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(blogsCollection, function (snapshot) {
      const blogsArr = snapshot.docs.map((doc) => (
        <BlogContainer key={doc.id}>
          <StyledH2 $theme={theme}>{doc.data().title}</StyledH2>
          <StyledP $theme={theme}>{doc.data().content}</StyledP>
        </BlogContainer>
      ));
      setBlogs(blogsArr);
    });
    return unsubscribe;
  }, []);

  return (
    <BlogsContainer>
      <StyledH1 $theme={theme}>Blogs</StyledH1>
      {blogs}
      <StyledLink $theme={theme} to="login">
        Editor
      </StyledLink>
    </BlogsContainer>
  );
};

export default Blogs;
