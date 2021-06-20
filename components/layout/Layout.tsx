import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1200px;
  min-height: 100px;
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
`

const StyledMain = styled.div`
  width: 100%;
`

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </StyledContainer>
  )
}
