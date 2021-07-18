import styled from "styled-components";

const StyledSpacerBorder = styled.div`
  flex-grow: 1;
  height: 1px;
  margin: var(--margins-md);
  background: var(--color-text);

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const SpacerBorder = () => {
  return <StyledSpacerBorder />;
};
