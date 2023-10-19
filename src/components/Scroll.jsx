import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { CursorPointerSwitch } from "../assets/styles/Styles";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border: none;
  background-color: unset;
  font-size: 3rem;
  cursor: ${CursorPointerSwitch};
  @media (min-width: 800px) {
    right: 3rem;
  }
`;
const Scroll = () => {
  const [scroll, setScroll] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <>{scroll && <ScrollButton onClick={scrollToTop}>🦋</ScrollButton>}</>;
};
export default Scroll;
