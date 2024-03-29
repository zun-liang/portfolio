import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { OpaqueSwitch, PrimarySecondary, TertiaryHighlight } from "../assets/styles/Styles";
/* eslint-disable react/prop-types */

import { db } from "../firebase";

const CommentsContainer = styled.div`
  background-color: ${OpaqueSwitch};
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  & > :not(:last-child):not(:first-child) {
    padding-bottom: 1rem;
    border-bottom: 1px dashed
      ${({ theme }) =>
        theme.mode ? "var(--light-tertiary)" : "rgba(0, 0, 0, 0.8)"};
  }
  @media (min-width: 1024px) {
    padding: 2rem 2rem 3rem 2rem;
  }
`;
const StyledTitle = styled.p`
  text-align: center;
  font-family: var(--ff-focus);
  color: ${TertiaryHighlight};
  font-size: 1.2rem;
  margin-bottom: -0.5rem;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Name = styled.p`
  font-family: var(--ff-focus);
  color: ${TertiaryHighlight};
`;
const Time = styled.p`
  font-size: 0.8rem;
  color: ${TertiaryHighlight};
`;
const Text = styled.p`
  color: ${PrimarySecondary};
`;
const Comments = ({ blogID }) => {
  const blogRef = doc(db, "blogs", blogID);
  const commentsRef = collection(blogRef, "comments");
  const q = query(commentsRef, orderBy("timestamp", "desc"));
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(q, (querySnapshot) => {
      const updatedComments = [];
      querySnapshot.forEach((doc) => {
        updatedComments.push(doc.data());
      });
      setComments(updatedComments);
    });
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayComments = comments.map((comment) => (
    <CommentContainer key={comment.id}>
      <Name>{comment.name}</Name>
      <Time>{comment.timestamp?.toDate().toLocaleString()}</Time>
      <Text>{comment.text}</Text>
    </CommentContainer>
  ));
  return (
    <>
      {displayComments.length > 0 && (
        <CommentsContainer>
          <StyledTitle>Comments &#40;{displayComments.length}&#41;</StyledTitle>
          {displayComments}
        </CommentsContainer>
      )}
    </>
  );
};

export default Comments;
