import React from "react";
import styled from "styled-components";
import { SpacerBorder } from "./icons/SpacerBorder";
import Icon from "./icons/Icon";

export const ContainerSeparator = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 var(--margins-lg);
`;

const Svg = styled(Icon)`
  width: 40px;
  height: auto;
  color: var(--color-text);

  ${ContainerSeparator} & {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const SvgPlusIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </Svg>
);

export const Separator = () => {
  return (
    <ContainerSeparator>
      <SvgPlusIcon />
      <SpacerBorder />
      <SvgPlusIcon />
    </ContainerSeparator>
  );
};
