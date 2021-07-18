import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { WireframeSphere } from "../components/WireframeSphere";
import { HyperGlobe } from "../components/Hyperglobe";
import { AnimatedPlusIcon } from "../components/icons/AnimatedSvgPlusIcon";
import { SvgCircleIcon } from "../components/icons/SvgCircleIcon";
import { SvgMinusLongIcon } from "../components/icons/SvgMinusIcon";
import Layout from "../components/layout/Layout";
import { PageRoot } from "../components/layout/PageRoot";
import { Separator } from "../components/Separator";

import { TextFaqButton } from "../components/buttons/TextButton";
import { DownloadLokinet } from "../components/DownloadLokinet";
import { HoleWireFrame } from "../components/HoleWireframe";

const StyledTitle = styled.h1`
  font-family: "Inter", Sans-serif;
  font-weight: 600;
  font-size: 43px;
`;

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  /* min-height: 520px; */
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-wrap: wrap-reverse;
    height: unset;
  }
`;

const StyledLeftSection = styled.div<{
  maxWidth: string;
  centerItems?: boolean;
}>`
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-grow: 1;
  margin: var(--margins-lg);
  flex-direction: column;
  align-items: ${(props) => (props.centerItems ? "center" : "")};

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledRightSection = styled.div<{ maxWidth: string }>`
  max-width: ${(props) => props.maxWidth};

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding-top: var(--margins-lg);
    padding-bottom: var(--margins-lg);
  }
`;

const StyledP = styled.p`
  font-family: "IBM Plex Mono", sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding-left: var(--margins-md);
  padding-top: 0px;
  margin-top: 0px;
`;

const BorderIconContainer = styled.div`
  /* padding: 30px; */

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FirstSection = () => {
  return (
    <>
      <StyledSection>
        <BorderIconContainer>
          <AnimatedPlusIcon />
        </BorderIconContainer>
        <StyledLeftSection maxWidth="40%">
          <StyledTitle>Anonymous Internet Access</StyledTitle>
          <StyledP>
            – Browse privately
            <br />
            – Block surveillance
            <br />– Discover private websites
          </StyledP>
          <DownloadLokinet />
        </StyledLeftSection>
        <StyledRightSection maxWidth="60%">
          <WireframeSphere />
        </StyledRightSection>
        <BorderIconContainer>
          <SvgMinusLongIcon />
        </BorderIconContainer>
      </StyledSection>
      <Separator />
    </>
  );
};

const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 16px;
  font-family: "Archivo", Sans-serif;
  padding: var(--margins-md);
`;

const StyledSmallText = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-family: "IBM Plex Mono", Sans-serif;
`;

const SecondSection = () => {
  return (
    <>
      <StyledSection>
        <BorderIconContainer>
          <SvgCircleIcon />
        </BorderIconContainer>
        <StyledLeftSection maxWidth="60%" centerItems={true}>
          <HyperGlobe />
        </StyledLeftSection>
        <StyledRightSection maxWidth="40%">
          <StyledH3>DECENTRALISED NETWORK</StyledH3>
          <StyledSmallText>
            Lokinet is powered by a decentralised network of staked nodes.
            Nobody can shut it down. Nobody can spy on you.
          </StyledSmallText>
          <StyledH3>ONION-ROUTED TRAFFIC</StyledH3>
          <StyledSmallText>
            Lokinet traffic is onion-routed. Your browsing is private, secure,
            and anonymous.
          </StyledSmallText>
          <StyledH3>NO IP ADDRESSES</StyledH3>
          <StyledSmallText>
            Lokinet hides your IP. Lokinet hides the IPs you connect to. Your
            location and identity are unknown.
          </StyledSmallText>
        </StyledRightSection>
        <BorderIconContainer>
          <SvgMinusLongIcon />
        </BorderIconContainer>
      </StyledSection>
      <Separator />
    </>
  );
};

const ThirdSection = () => {
  return (
    <>
      <StyledSection>
        <BorderIconContainer>
          <SvgMinusLongIcon />
        </BorderIconContainer>
        <StyledLeftSection maxWidth="40%">
          <StyledH3>CENSORSHIP-RESISTANT</StyledH3>
          <StyledSmallText>
            With no central authority controlling the network, content hosted
            over Lokinet can’t be censored.
          </StyledSmallText>
          <StyledH3>CROSS PLATFORM</StyledH3>
          <StyledSmallText>
            Lokinet clients are available for Windows and Linux. macOS and
            Mobile clients are currently being developed.
          </StyledSmallText>
          <StyledH3>EASY TO USE</StyledH3>
          <StyledSmallText>
            Lokinet can work with any application. Easily integrate Lokinet with
            the tools you already use.
          </StyledSmallText>
          <TextFaqButton />
        </StyledLeftSection>
        <StyledRightSection maxWidth="60%">
          <HoleWireFrame />
        </StyledRightSection>

        <BorderIconContainer>
          <AnimatedPlusIcon />
        </BorderIconContainer>
      </StyledSection>
    </>
  );
};

export default function Home() {
  return (
    <PageRoot>
      <Head>
        <title>Anonymous internet access - Lokinet</title>
        <meta
          name="description"
          content="Anonymous internet access - Lokinet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Layout>
    </PageRoot>
  );
}
