import styled from 'styled-components'

const StyledSpacerBorder = styled.div`
  flex-grow: 1;
  background: red;
  height: 1px;
  margin: ${(props) => props.theme.margins.md};
  background: ${(props) => props.theme.colors.secondary};
`

export const SpacerBorder = () => {
  return <StyledSpacerBorder />
}
