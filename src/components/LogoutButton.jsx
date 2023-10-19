/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BasicButton,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const StyledButton = styled(BasicButton)`
  width: 4.5rem;
  font-size: 0.8rem;
  color: ${TertiaryDot};
  &:hover,
  &:active,
  &:focus {
    color: ${PrimarySecondary};
  }
`;
const LogoutButton = ({ theme }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/logout");
  };
  return (
    <>
      {authToken ? (
        <StyledButton $theme={theme} onClick={logout}>
          Log out
        </StyledButton>
      ) : null}
    </>
  );
};
export default LogoutButton;
