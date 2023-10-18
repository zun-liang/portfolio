/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ReactComponent as Ear } from "../assets/images/ear.svg";
import { ReactComponent as EarSlash } from "../assets/images/ear-slash.svg";
import {
  CursorPointerSwitch,
  PrimaryTertiary,
  TertiarySecondary,
} from "../assets/styles/Styles";

const Container = styled.div`
  align-self: flex-start;
  margin-bottom: -2rem;
  cursor: ${CursorPointerSwitch};
`;
const StyledEar = styled(Ear)`
  width: 1.2rem;
  height: 1.2rem;
  fill: ${TertiarySecondary};
  &:hover {
    fill: ${PrimaryTertiary};
  }
`;
const StyledEarSlash = styled(EarSlash)`
  width: 1.2rem;
  height: 1.2rem;
  fill: ${TertiarySecondary};
  &:hover {
    fill: ${PrimaryTertiary};
  }
`;

const SoundSwitch = ({ theme, sound, setSound }) => {
  const toggleSound = () => setSound((prev) => !prev);
  return (
    <Container>
      {sound ? (
        <StyledEarSlash $theme={theme} onClick={toggleSound} />
      ) : (
        <StyledEar $theme={theme} onClick={toggleSound} />
      )}
    </Container>
  );
};
export default SoundSwitch;
