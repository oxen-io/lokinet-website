import React from "react";
import styled from "styled-components";
import { SvgPlusIcon } from "./SvgPlusIcon";

const StyledAnimatedPlusIcon = styled.div`
  animation: rotation 40s infinite linear;
  height: fit-content;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    2.5% {
      transform: rotate(45deg);
    }

    12.5% {
      transform: rotate(45deg);
    }

    15% {
      transform: rotate(90deg);
    }

    25% {
      transform: rotate(90deg);
    }

    27.5% {
      transform: rotate(135deg);
    }

    37.5% {
      transform: rotate(135deg);
    }

    40% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    52.5% {
      transform: rotate(225deg);
    }

    62.5% {
      transform: rotate(225deg);
    }

    65% {
      transform: rotate(270deg);
    }

    75% {
      transform: rotate(270deg);
    }

    77.5% {
      transform: rotate(315deg);
    }

    87.5% {
      transform: rotate(315deg);
    }

    90% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AnimatedPlusIcon = () => {
  return (
    <StyledAnimatedPlusIcon>
      <SvgPlusIcon />
    </StyledAnimatedPlusIcon>
  );
};
