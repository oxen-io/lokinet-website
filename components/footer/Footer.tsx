import Logo from "../logo/Logo";

import TelegramButton from "../buttons/image-button/social-buttons/TelegramButton";
import React from "react";
import TwitterButton from "../buttons/image-button/social-buttons/TwitterButton";
import Spacer from "../spacer/Spacer";
import styled from "styled-components";
import { Flex } from "../flex/Flex";
import { PrivacyLinkButton } from "../buttons/InternalLinkButton";
import { Separator } from "../Separator";

const StyledFooter = styled.footer`
  min-height: 100px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;

  margin-top: var(--margins-lg);
`;

const StyledBottomFooter = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - 2 * var(--margins-xxl));
  margin-left: var(--margins-xxl);
  margin-right: var(--margins-xxl);
  margin-bottom: var(--margins-lg);
  margin-top: var(--margins-lg);
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.span``;

const PrivacyAndButtonsFlex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Flex container={true} flexGrow={1} width="100%" flexDirection="column">
        <Separator />
        <StyledBottomFooter>
          <Logo />
          <PrivacyAndButtonsFlex>
            <PrivacyLinkButton />
            <ButtonContainer>
              <TwitterButton />
              <TelegramButton />
            </ButtonContainer>
          </PrivacyAndButtonsFlex>
        </StyledBottomFooter>
      </Flex>
    </StyledFooter>
  );
}
