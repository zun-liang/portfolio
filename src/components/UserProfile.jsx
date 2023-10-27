import { useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as UserDefault } from "../assets/images/user.svg";
import {
  SecondaryPrimary,
  TertiaryDot,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";

const ProfileContainer = styled.div`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  @media (min-width: 1000px) {
    gap: 0.8rem;
  }
`;
const StyledP = styled.p`
  font-size: 1rem;
  color: ${TertiaryParagraph};
  text-shadow: 1px 1px ${SecondaryPrimary};
  font-family: "Black Ops One", sans-serif;
`;
const StyledImg = styled.img`
  width: 2rem;
  border-radius: 50%;
`;
const StyledUserDefault = styled(UserDefault)`
  width: 1.2rem;
  height: 1.2rem;
  & > path {
    fill: ${TertiaryDot};
  }
`;

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const loggedin = useContext(AuthContext);

  useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      setUserName(displayName);
      const photoURL = user.photoURL;
      setUserPhoto(photoURL);
    }
  }, []);

  return (
    <>
      {loggedin && (
        <ProfileContainer>
          {userPhoto ? (
            <StyledImg src={userPhoto} alt="user profile" />
          ) : (
            <StyledUserDefault />
          )}
          <StyledP>{userName ? userName : "Admin"}</StyledP>
        </ProfileContainer>
      )}
    </>
  );
};

export default UserProfile;
