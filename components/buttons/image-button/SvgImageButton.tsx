import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  border-radius: 50%;
  background-color: var(--color-text);
  color: var(--color-background);
  transition: 0.3s;
  padding: ${(props) => props.theme.margins.sm};
  margin: ${(props) => props.theme.margins.sm};
  &:hover {
    filter: invert(1);
  }
  cursor: pointer;
`;

export default function SvgImageButton(props: {
  children: React.ReactElement;
  externalUrlToOpen: string;
}) {
  return (
    <a target="_blank" href={props.externalUrlToOpen} rel="noopener noreferrer">
      <StyledButton>{props.children}</StyledButton>
    </a>
  );
}
