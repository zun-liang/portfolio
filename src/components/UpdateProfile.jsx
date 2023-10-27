import styled from "styled-components";
import {
  BasicButton,
  PrimarySwitch,
  SecondaryPrimary,
  SecondarySwitch,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import Profile from "../assets/images/profile.png";

const StyledButton = styled(BasicButton)`
  color: ${TertiaryParagraph};
  text-shadow: 1px 1px ${SecondaryPrimary};
  padding: 0.3rem 0.5rem;
  &:hover,
  &:active,
  &:focus {
    color: ${PrimarySwitch};
    text-shadow: 1px 0px ${SecondarySwitch};
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
        throw new Error("Something went wrong while updating profile.");
      });
  };
  return <StyledButton onClick={handleClick}>Update Profile</StyledButton>;
};

export default UpdateProfile;
