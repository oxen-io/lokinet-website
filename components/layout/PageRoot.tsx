import styled from 'styled-components'

const StyledPageRoot = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`

export const PageRoot = (props: { children: React.ReactNode }) => {
  return <StyledPageRoot>{props.children}</StyledPageRoot>
}
