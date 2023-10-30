import styled from "styled-components";
import {
  PrimarySwitch,
  PointerSwitch,
  TertiaryParagraph,
  BackgroundSwitch,
  BasicInput,
  BasicButton,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import Profile from "../assets/images/profile.png";
import { ReactComponent as ProfileIcon } from "../assets/images/icons/user-pen.svg";
import { useState } from "react";

const StyledProfileIcon = styled(ProfileIcon)`
  width: 1.5rem;
  height: 1.5rem;
  & > path {
    stroke: ${TertiaryParagraph};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > path {
      stroke: ${PrimarySwitch};
    }
  }
`;
const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const StyledDiv = styled.div`
  width: 400px;
  height: 250px;
  background-color: ${BackgroundSwitch};
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  color: ${TertiarySecondary};
`;
const StyledInput = styled(BasicInput)`
  margin-top: -0.5rem;
  height: 1.5rem;
  padding: 0 10px;
`;
const FileInput = styled.input`
  height: 1.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiarySecondary};
`;
const StyledButton = styled(BasicButton)`
  border: 2px solid ${TertiarySecondary};
  color: ${TertiarySecondary};
  &:hover,
  :active,
  :focus {
    color: ${PrimarySwitch};
    background-color: ${TertiarySecondary};
    border: 2px solid ${PrimarySwitch};
  }
`;

const UpdateProfile = () => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(true);
  };
  const upload = () => {
    setEdit(false);
    updateProfile(auth.currentUser, {
      displayName: "Zun",
      photoURL: Profile,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Something went wrong while updating profile.");
      });
  };
  return (
    <>
      <StyledProfileIcon onClick={handleClick} />
      {edit && (
        <BackContainer>
          <StyledDiv>
            <StyledLabel>User Name:</StyledLabel>
            <StyledInput type="text" id="username" name="username" />
            <StyledLabel>Profile Picture:</StyledLabel>
            <FileInput type="file" id="userphoto" name="userphoto" />
            <StyledButton onClick={upload}>Upload</StyledButton>
          </StyledDiv>
        </BackContainer>
      )}
    </>
  );
};

export default UpdateProfile;
//either action or state
