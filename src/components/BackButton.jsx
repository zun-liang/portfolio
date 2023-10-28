/* eslint-disable react/prop-types */
import { ReactComponent as BackIcon } from "../assets/images/back.svg";
import styled from "styled-components";
import {
  PrimarySwitch,
  TertiarySecondary,
  PointerSwitch,
} from "../assets/styles/Styles";

const StyledBackIcon = styled(BackIcon)`
  width: 2rem;
  height: 2rem;
  & > path {
    fill: ${TertiarySecondary};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > path {
      fill: ${PrimarySwitch};
    }
  }
`;

const BackButton = ({ handleClick }) => {
  return <StyledBackIcon onClick={handleClick} />;
};

export default BackButton;
