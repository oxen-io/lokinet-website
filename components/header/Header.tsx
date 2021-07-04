import React from "react";
import styled from "styled-components";
import { FaqLinkButton } from "../buttons/InternalLinkButton";
import Logo from "../logo/Logo";
import Spacer from "../spacer/Spacer";
import { DarkToggle } from "../ThemeToggle";

const StyledHeader = styled.div`
  min-height: 100px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Spacer />
      <FaqLinkButton />
      <DarkToggle />
    </StyledHeader>
  );
}
