import { updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ProfileIcon } from "../assets/images/icons/user-pen.svg";
import {
  ActionDiv,
  BackContainer,
  BasicButton,
  BasicInput,
  PointerSwitch,
  PrimarySwitch,
  TertiaryParagraph,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { auth } from "../firebase";

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
const StyledDiv = styled(ActionDiv)`
  width: 400px;
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  color: ${TertiarySecondary};
`;
const StyledInput = styled(BasicInput)`
  margin-top: -0.5rem;
  height: 1.8rem;
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
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const storage = getStorage();
  const profileRef = ref(storage, "profile.jpg");

  const handleClick = () => setEdit(true);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserPhoto = (e) => setUserPhoto(e.target.files[0]);

  const upload = () => {
    setEdit(false);
    uploadBytes(profileRef, userPhoto).then(() => {
      getDownloadURL(profileRef)
        .then((url) => {
          updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: url,
          })
            .then(() => {
              setUserName("");
              setUserPhoto(null);
            })
            .catch((error) => {
              console.error("Error while updating profile:", error);
              throw new Error("Something went wrong while updating profile");
            });
        })
        .catch((error) => {
          console.error("Error while downloading user photo url:", error);
          throw new Error(
            "Something went wrong while downloading user photo url"
          );
        });
    });
  };

  const quitEdit = () => {
    setEdit(false);
    setUserName("");
    setUserPhoto(null);
  };

  return (
    <>
      <StyledProfileIcon onClick={handleClick} />
      {edit && (
        <BackContainer>
          <StyledDiv>
            <StyledLabel htmlFor="username">User Name:</StyledLabel>
            <StyledInput
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={handleUserName}
              required
            />
            <StyledLabel htmlFor="userphoto">Profile Picture:</StyledLabel>
            <FileInput
              type="file"
              id="userphoto"
              name="userphoto"
              onChange={handleUserPhoto}
              required
            />
            <StyledButton onClick={upload}>Upload</StyledButton>
            <StyledButton onClick={quitEdit}>Cancel</StyledButton>
          </StyledDiv>
        </BackContainer>
      )}
    </>
  );
};

export default UpdateProfile;
