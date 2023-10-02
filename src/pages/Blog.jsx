/* eslint-disable react/prop-types */
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { blogsCollection } from "../firebase";
import {
  PrimaryColorSwitch,
  SecondaryColorSwitch,
  CursorPointerSwitch,
  HoverColorSwitch,
} from "../assets/styles/Styles";
import Login from "../components/Login";

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
`;
const StyledP = styled.p``;
const StyledButton = styled.button`
  width: 4.5rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  cursor: ${CursorPointerSwitch};
  background-color: transparent;
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  &:hover,
  &:active {
    background-color: ${HoverColorSwitch};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Blog = ({ showEditor, setShowEditor, theme }) => {
  const [blogs, setBlogs] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);

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
      <StyledButton $theme={theme} onClick={handleShowLogin}>
        admin
      </StyledButton>
      {showLogin && (
        <Login
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          theme={theme}
        />
      )}
    </BlogsContainer>
  );
};

export default Blog;
