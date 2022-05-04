import { AnimatedPlusIcon } from "../components/icons/AnimatedSvgPlusIcon";
import { DownloadLokinet } from "../components/DownloadLokinet";
import { HyperGlobe } from "../components/Hyperglobe";
import Layout from "../components/layout/Layout";
import { PageRoot } from "../components/layout/PageRoot";
import React from "react";
import { Separator } from "../components/Separator";
import { SvgCircleIcon } from "../components/icons/SvgCircleIcon";
import { SvgMinusLongIcon } from "../components/icons/SvgMinusIcon";
import { TextFaqButton } from "../components/buttons/TextButton";
import { WireframeHole } from "../components/WireframeHole";
import { WireframeSphere } from "../components/WireframeSphere";
import styled from "styled-components";

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
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap-reverse;
    height: unset;
  }
`;

const StyledLeftSection = styled.div<{
  maxWidth: string;
  centerItems: boolean;
  disableLeftPadding: boolean;
}>`
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-grow: 1;
  margin: var(--margins-lg);
  flex-direction: column;
  align-items: ${(props) => (props.centerItems ? "center" : "")};
  padding-left: ${(props) => (props.disableLeftPadding ? "0" : "3rem")};

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
  }
`;

const StyledRightSection = styled.div<{
  maxWidth: string;
  centerItems?: boolean;
}>`
  max-width: ${(props) => props.maxWidth};

  display: flex;
  flex-grow: 1;
  align-items: ${(props) => (props.centerItems ? "center" : "")};
  justify-content: center;
  flex-direction: column;
  padding-right: 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding-top: var(--margins-lg);
    padding-bottom: var(--margins-lg);
    padding-right: 0;
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
        <StyledLeftSection
          maxWidth="40%"
          disableLeftPadding={false}
          centerItems={false}
        >
          <StyledTitle>Anonymous Internet Access</StyledTitle>
          <StyledP>
            – Browse privately
            <br />
            – Block surveillance
            <br />– Discover private websites
          </StyledP>
          <DownloadLokinet />
        </StyledLeftSection>
        <StyledRightSection maxWidth="60%" centerItems={true}>
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
  padding-top: var(--margins-md);
  padding-bottom: var(--margins-xs);
  flex-grow: 1;
`;

const StyledSmallText = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-family: "IBM Plex Mono", Sans-serif;
  text-align: justify;
`;

const SecondSection = () => {
  return (
    <>
      <StyledSection>
        <BorderIconContainer>
          <SvgCircleIcon />
        </BorderIconContainer>
        <StyledLeftSection
          maxWidth="55%"
          centerItems={true}
          disableLeftPadding={true}
        >
          <HyperGlobe />
        </StyledLeftSection>
        <StyledRightSection maxWidth="45%" centerItems={false}>
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
        <StyledLeftSection
          maxWidth="40%"
          disableLeftPadding={false}
          centerItems={false}
        >
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
        <StyledRightSection maxWidth="60%" centerItems={true}>
          <WireframeHole />
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
      <Layout>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Layout>
    </PageRoot>
  );
}
