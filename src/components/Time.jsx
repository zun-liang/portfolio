/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

import { SecondaryPrimary, TertiarySecondary } from "../assets/styles/Styles";

const TimeContainer = styled.p`
  text-align: right;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  font-size: 0.8rem;
  @media (min-width: 750px) {
    font-size: 0.9rem;
  }
`;

const Time = () => {
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  };

  const [current, setCurrent] = useState(
    new Date().toLocaleString("en-US", options)
  );

  useEffect(() => {
    const intId = setInterval(() => {
      const updatedCurrent = new Date().toLocaleString("en-US", options);
      setCurrent(updatedCurrent);
    }, 1000);
    return () => clearInterval(intId);
  }, []);

  return <TimeContainer>{current}</TimeContainer>;
};

export default Time;
