import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledInternalLinkButton = styled.a`
  margin-right: var(--margins-lg);
  border-bottom: solid 1px var(--color-text);
  transition: all var(--duration-linkBottom) linear;
  white-space: nowrap;

  &:hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0);
  }
`;

const StyledPrivacyLink = styled(StyledInternalLinkButton)``;
const StyledFaqLink = styled(StyledInternalLinkButton)`
  font-weight: 800;
  font-family: "Archivo", Sans-serif;
  padding: var(--margins-md);
  border-bottom: solid 3px var(--color-text);
`;

export const PrivacyLinkButton = () => {
  return (
    <Link href="/privacy-policy" passHref={true}>
      <StyledPrivacyLink>Privacy Policy</StyledPrivacyLink>
    </Link>
  );
};

export const FaqLinkButton = () => {
  return (
    <Link href="/faq" passHref={true}>
      <StyledFaqLink>FAQ</StyledFaqLink>
    </Link>
  );
};
