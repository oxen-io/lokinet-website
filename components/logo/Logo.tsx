import Image from 'next/image'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
`

export default function Logo() {
  return (
    <StyledContainer>
      <Image
        src="/Lokinet_logo_blk.png"
        alt="Lokinet logo"
        width={1024}
        height={200}
      />
    </StyledContainer>
  )
}
