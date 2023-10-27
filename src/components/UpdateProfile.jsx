import styled from "styled-components";
import {
  BasicButton,
  PrimarySecondary,
  SecondaryPrimary,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import Profile from "../assets/images/profile.png";

const StyledButton = styled(BasicButton)`
  color: ${PrimarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  padding: 0.3rem 0.5rem;
  &:hover,
  &:active,
  &:focus {
    color: ${TertiaryParagraph};
  }
`;

const UpdateProfile = () => {
  const handleClick = () => {
    updateProfile(auth.currentUser, {
      displayName: "Zun",
      photoURL: Profile,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <StyledButton onClick={handleClick}>Update Profile</StyledButton>;
};

export default UpdateProfile;
