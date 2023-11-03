import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { PrimaryHighlight } from "../assets/styles/Styles";
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
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${PrimaryHighlight};
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
            <StyledFontAwesomeIcon icon={faUser} />
          )}
          <StyledP>{userName ? userName : "Admin"}</StyledP>
        </ProfileContainer>
      )}
    </>
  );
};

export default UserProfile;
