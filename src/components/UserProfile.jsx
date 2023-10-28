import { useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as UserDefault } from "../assets/images/user.svg";
import { PrimaryHighlight, TertiaryDot } from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";

const ProfileContainer = styled.div`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
`;
const StyledP = styled.p`
  font-size: 0.9rem;
  color: ${PrimaryHighlight};
  letter-spacing: 1px;
  font-family: "Black Ops One", sans-serif;
`;
const StyledImg = styled.img`
  width: 2rem;
  border-radius: 50%;
`;
const StyledUserDefault = styled(UserDefault)`
  width: 2rem;
  height: 2rem;
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
