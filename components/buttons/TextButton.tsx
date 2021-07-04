import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledTextButton = styled.div`
  width: fit-content;
  height: auto;
  background: none;
  border: none;
  border-radius: 5px;
  border: 1px solid var(--color-background);
  background-color: var(--color-text);
  color: var(--color-background);
  transition: 0.3s;
  &:hover {
    filter: invert(1);
  }
  cursor: pointer;

  font-weight: 600;
  font-size: 12px;
  font-family: "Archivo", Sans-serif;
  padding: var(--margins-sm) var(--margins-lg);
  margin: var(--margins-sm) var(--margins-lg);
  letter-spacing: 1.6px;
  margin-left: 0;
`;

export const TextFaqButton = () => {
  return (
    <Link href="/faq" passHref={true}>
      <StyledTextButton>FREQUENTLY ASKED QUESTIONS</StyledTextButton>
    </Link>
  );
};
