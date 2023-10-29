import styled from "styled-components";
import {
  PrimarySwitch,
  PointerSwitch,
  TertiaryParagraph,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import Profile from "../assets/images/profile.png";
import { ReactComponent as ProfileIcon } from "../assets/images/icons/user-pen.svg";

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
  return <StyledProfileIcon onClick={handleClick} />;
};

export default UpdateProfile;
//should have a interface that i can edit name and photo url
