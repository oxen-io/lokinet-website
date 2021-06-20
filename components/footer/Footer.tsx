import Logo from '../logo/Logo'

import TelegramButton from '../buttons/image-button/social-buttons/TelegramButton'
import React from 'react'
import TwitterButton from '../buttons/image-button/social-buttons/TwitterButton'
import Spacer from '../spacer/Spacer'
import styled from 'styled-components'
import Link from 'next/link'
import { SvgPlusImage } from '../icons/SvgPlusImage'
import { Flex } from '../flex/Flex'
import { SpacerBorder } from '../icons/SpacerBorder'

const StyledFooter = styled.footer`
  min-height: 100px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding-left: ${(props) => props.theme.margins.lg};
  padding-right: ${(props) => props.theme.margins.lg};
`

const StyledBottomFooter = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - 2 * ${(props) => props.theme.margins.xxl});
  margin-left: ${(props) => props.theme.margins.xxl};
  margin-right: ${(props) => props.theme.margins.xxl};
  margin-bottom: ${(props) => props.theme.margins.lg};
  margin-top: ${(props) => props.theme.margins.lg};
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`

const StyledPrivacyLink = styled.a`
  margin-right: ${(props) => props.theme.margins.lg};
  border-bottom: solid 1px black;
  transition: all ${(props) => props.theme.duration.linkBottom} linear;
  white-space: nowrap;

  &:hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0);
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Flex container={true} flexGrow={1} width="100%" flexDirection="column">
        <Flex container={true} flexGrow={1} alignItems="center">
          <SvgPlusImage />
          <SpacerBorder />
          <SvgPlusImage />
        </Flex>
        <StyledBottomFooter>
          <Logo />
          <Spacer />
          <Link href="/privacy-policy" passHref={true}>
            <StyledPrivacyLink>Privacy Policy</StyledPrivacyLink>
          </Link>
          <TwitterButton />
          <TelegramButton />
        </StyledBottomFooter>
      </Flex>
    </StyledFooter>
  )
}
