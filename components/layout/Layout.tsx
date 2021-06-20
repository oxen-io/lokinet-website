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

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </StyledContainer>
  )
}
