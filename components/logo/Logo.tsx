import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

const StyledContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
`

export default function Logo() {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Image
        src={`/Lokinet_logo_${theme.themeSuffix}.png`}
        alt="Lokinet logo"
        width={1024}
        height={200}
      />
    </StyledContainer>
  )
}
