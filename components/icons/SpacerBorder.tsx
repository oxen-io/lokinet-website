import styled from "styled-components";

const StyledSpacerBorder = styled.div`
  flex-grow: 1;
  background: red;
  height: 1px;
  margin: var(--margins-md);
  background: var(--color-text);
`;

export const SpacerBorder = () => {
  return <StyledSpacerBorder />;
};
