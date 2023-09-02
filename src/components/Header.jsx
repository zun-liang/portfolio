/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header``;
const Time = styled.p`
  color: var(--focus1);
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--focus1);
`;
const Header = ({ theme, setTheme }) => {
  const [current, setCurrent] = useState(
    new Date().toLocaleString("en-US", { hour12: false })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCurrent = new Date().toLocaleString("en-US", {
        hour12: false,
      });
      setCurrent(updatedCurrent);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTheme = () => setTheme((prev) => !prev);
  return (
    <StyledHeader>
      <Time>{current}</Time>
      <Icon icon={theme ? faMoon : faCloud} onClick={updateTheme} />
    </StyledHeader>
  );
};

export default Header;
