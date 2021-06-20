import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledInternalLinkButton = styled.a`
  margin-right: ${(props) => props.theme.margins.lg};
  border-bottom: solid 1px black;
  transition: all ${(props) => props.theme.duration.linkBottom} linear;
  white-space: nowrap;

  &:hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0);
  }
`

const StyledPrivacyLink = styled(StyledInternalLinkButton)``
const StyledFaqLink = styled(StyledInternalLinkButton)`
  font-weight: 800;
  font-family: 'Archivo', Sans-serif;
  padding: ${(props) => props.theme.margins.md};
  border-bottom: solid 3px black;
`

export const PrivacyLinkButton = () => {
  return (
    <Link href="/privacy-policy" passHref={true}>
      <StyledPrivacyLink>Privacy Policy</StyledPrivacyLink>
    </Link>
  )
}

export const FaqLinkButton = () => {
  return (
    <Link href="/faq" passHref={true}>
      <StyledFaqLink>FAQ</StyledFaqLink>
    </Link>
  )
}
