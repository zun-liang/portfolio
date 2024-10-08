import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import Sparkle from "../assets/sounds/sparkle.mp3";
import { PointerSwitch, PrimarySecondary } from "../assets/styles/Styles";
import { SoundContext } from "../contexts/SoundContext";
import { ReactComponent as ButterflyIcon } from "../assets/images/butterfly.svg";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  border: none;
  background-color: unset;
  cursor: ${PointerSwitch};
  @media (min-width: 375px) {
    right: 1.8rem;
  }
  @media (min-width: 750px) {
    right: 3rem;
  }
`;
const StyledButterflyIcon = styled(ButterflyIcon)`
  width: 3rem;
  height: 3rem;
  fill: ${PrimarySecondary};
`;

const Scroll = () => {
  const { sound } = useContext(SoundContext);
  const [scroll, setScroll] = useState(null);
  const { pathname } = useLocation();
  const [playSparkle] = useSound(Sparkle, { soundEnabled: sound });

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
    playSparkle();
  };

  return (
    <>
      {scroll && (
        <ScrollButton aria-label="scroll to top" onClick={scrollToTop}>
          <StyledButterflyIcon />
        </ScrollButton>
      )}
    </>
  );
};

export default Scroll;
