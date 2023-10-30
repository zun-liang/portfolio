/* eslint-disable react/prop-types */
import { ReactComponent as BackIcon } from "../assets/images/icons/back.svg";
import styled from "styled-components";
import {
  PointerSwitch,
  TertiaryHighlight,
  PrimarySecondary,
} from "../assets/styles/Styles";

const StyledBackIcon = styled(BackIcon)`
  width: 2rem;
  height: 2rem;
  & > path {
    fill: ${TertiaryHighlight};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > path {
      fill: ${PrimarySecondary};
    }
  }
`;

const BackButton = ({ handleClick }) => {
  return <StyledBackIcon onClick={handleClick} />;
};

export default BackButton;
