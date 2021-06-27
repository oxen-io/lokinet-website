import React from "react";
import styled from "styled-components";
import { SpacerBorder } from "./icons/SpacerBorder";
import { SvgPlusIcon } from "./icons/SvgPlusIcon";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 ${(props) => props.theme.margins.lg};
`;

export const Separator = () => {
  return (
    <Container>
      <SvgPlusIcon />
      <SpacerBorder />
      <SvgPlusIcon />
    </Container>
  );
};
