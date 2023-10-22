/* eslint-disable react/prop-types */
import styled from "styled-components";
import { auth } from "../firebase";
import { useState, useEffect, useContext } from "react";
import { ReactComponent as UserDefault } from "../assets/images/user.svg";
import { TertiaryDot } from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";

const ProfileContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 1000px) {
    gap: 0.8rem;
  }
`;
const StyledP = styled.p`
  font-size: 0.85rem;
  color: ${TertiaryDot};
  font-family: "Black Ops One", sans-serif;
`;
const StyledImg = styled.img``;
const StyledUserDefault = styled(UserDefault)`
  width: 1.2rem;
  height: 1.2rem;
  & > path {
    fill: ${TertiaryDot};
  }
`;

const UserProfile = ({ theme }) => {
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
            <StyledImg src={userPhoto} alt="user profile picture" />
          ) : (
            <StyledUserDefault $theme={theme} />
          )}
          <StyledP $theme={theme}>{userName ? userName : "Admin"}</StyledP>
        </ProfileContainer>
      )}
    </>
  );
};
export default UserProfile;
