import React, { ReactNode } from "react";

import CustomHead from "../CustomHead";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { IMetadata } from "../../constants/metadata";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  min-height: 100px;
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-left: var(--margins-lg);
    margin-right: var(--margins-lg);
  }
`;

const StyledMain = styled.div`
  width: 100%;
`;

interface Props {
  title?: string;
  metadata?: IMetadata;
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { title, metadata, children } = props;
  return (
    <StyledContainer>
      <CustomHead title={title} metadata={metadata} />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  );
}
