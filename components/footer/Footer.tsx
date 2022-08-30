import Logo from "../logo/Logo";

import TelegramButton from "../buttons/image-button/social-buttons/TelegramButton";
import React from "react";
import TwitterButton from "../buttons/image-button/social-buttons/TwitterButton";
import styled from "styled-components";
import { Flex } from "../flex/Flex";
import {
  PrivacyLinkButton,
  TermsOfServiceLinkButton,
} from "../buttons/InternalLinkButton";
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
  width: 100%;
  margin-bottom: var(--margins-lg);
  margin-top: var(--margins-lg);
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
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
            <TermsOfServiceLinkButton />
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
