import Logo from "../logo/Logo";

import TelegramButton from "../buttons/image-button/social-buttons/TelegramButton";
import React from "react";
import TwitterButton from "../buttons/image-button/social-buttons/TwitterButton";
import Spacer from "../spacer/Spacer";
import styled from "styled-components";
import { SvgPlusIcon } from "../icons/SvgPlusIcon";
import { Flex } from "../flex/Flex";
import { SpacerBorder } from "../icons/SpacerBorder";
import { PrivacyLinkButton } from "../buttons/InternalLinkButton";
import { Separator } from "../Separator";

const StyledFooter = styled.footer`
  min-height: 100px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding-left: var(--margins-lg);
  padding-right: var(--margins-lg);
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
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Flex container={true} flexGrow={1} width="100%" flexDirection="column">
        <Separator />
        <StyledBottomFooter>
          <Logo />
          <Spacer />
          <PrivacyLinkButton />
          <TwitterButton />
          <TelegramButton />
        </StyledBottomFooter>
      </Flex>
    </StyledFooter>
  );
}
