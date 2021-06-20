import styled from 'styled-components'
import Logo from '../logo/Logo'
import Spacer from '../spacer/Spacer'

const StyledHeader = styled.div`
  min-height: 100px;
  align-items: center;
  display: flex;
  background-color: lightgrey;
  flex-grow: 1;
  width: 100%;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Spacer />
    </StyledHeader>
  )
}
