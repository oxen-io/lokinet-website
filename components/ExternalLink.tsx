import styled from "styled-components";

export const StyledLink = styled.a`
  border-bottom: solid 1px var(--color-text);
  transition: all var(--duration-linkBottom) linear;

  &:hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0);
  }
`;

export const ExternalLink = (props: { text: string; url: string }) => {
  return (
    <StyledLink href={props.url} target="_blank" rel="noopener noreferrer">
      {props.text}
    </StyledLink>
  );
};
