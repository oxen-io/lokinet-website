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

const StyledTitle = styled.h1`
  font-family: "Inter", Sans-serif;
  font-weight: 600;
  font-size: 43px;
`;

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  height: 60vh;
  align-items: center;
`;

const StyledLeftSection = styled.div<{ maxWidth: string }>`
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const StyledRightSection = styled.div<{ maxWidth: string }>`
  max-width: ${(props) => props.maxWidth};

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledP = styled.p`
  font-family: "IBM Plex Mono", sans-serif;
  font-size: 15px;
  font-weight: 400;
`;

const BorderIconContainer = styled.div`
  padding: 30px;
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
            –Browse privately
            <br />
            –Block surveillance
            <br />
            –Discover private websites
          </StyledP>
        </StyledLeftSection>
        <StyledRightSection maxWidth="60%">
          <WireframeSphere />
        </StyledRightSection>

        <SvgMinusLongIcon />
      </StyledSection>
      <Separator />
    </>
  );
};

const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 16px;
  font-family: "Archivo", Sans-serif;
  padding: ${(props) => props.theme.margins.md};
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
        <StyledLeftSection maxWidth="60%">
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
            Lokinet clients are available for macOS, Windows, and Linux. Mobile
            clients are currently being developed.
          </StyledSmallText>
          <StyledH3>EASY TO USE</StyledH3>
          <StyledSmallText>
            Lokinet can work with any application. Easily integrate Lokinet with
            the tools you already use.
          </StyledSmallText>
        </StyledLeftSection>
        <StyledRightSection maxWidth="60%"></StyledRightSection>

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
