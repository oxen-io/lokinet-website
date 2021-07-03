import Head from "next/head";
import React from "react";
import { Accordion, AccordionSection } from "../components/Accordion";
import { ExternalLink } from "../components/ExternalLink";
import { Flex } from "../components/flex/Flex";
import Layout from "../components/layout/Layout";
import { PageRoot } from "../components/layout/PageRoot";

export default function Faq() {
  return (
    <PageRoot>
      <Head>
        <title>FAQ - Lokinet</title>
        <meta name="description" content="FAQ - Lokinet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Flex
          container={true}
          width="100%"
          flexDirection="column"
          alignItems="flex-start"
          padding="30px 0px"
        >
          <h2>Introduction</h2>
          <Accordion>
            <AccordionSection title="WHAT IS LOKINET?">
              Lokinet is a decentralised onion router that uses Oxen service
              nodes as relays, giving Lokinet the same market-based Sybil attack
              resistance as the Oxen blockchain. Lokinet supports web browsing,
              onion-routed real-time voice communications, and other
              applications.
            </AccordionSection>
            <AccordionSection title="WHAT CAN I DO WITH LOKINET?">
              <p>
                What can you do with the internet? Lokinet can do all that, and
                more.
              </p>
              <p>
                The list of things you can do with Lokinet is very, very long
                (and cool). You can do almost anything. Lokinet sends and
                receives IP packets, so anything that fits inside of an IP
                packet (which is pretty much anything) can work using Lokinet.
                The only thing Lokinet can’t handle is protocols that embed bare
                IPs in their protocol, like WebRTC and BitTorrent — but these
                still work through exit nodes, just not within Lokinet itself.
              </p>
              <p>
                Lokinet is one of the best ways to anonymously access the
                internet and communicate with other users. Because of its next
                generation design, it works seamlessly with absolutely any
                application. Other networks — like Tor and I2P — require
                specialised applications or custom patches to work, but not
                Lokinet.
              </p>
              <p>
                Imagine if the internet was private, anonymous, and encrypted by
                default. There are no restrictions on what data you can send or
                where it goes, all packets are equal. You can play games. You
                can video call your family. You can write a blog. The only limit
                is your imagination.
              </p>
            </AccordionSection>
            <AccordionSection title="HOW IS LOKINET DIFFERENT FROM TOR?">
              <p>
                While Tor and Lokinet are both onion routers, they are very
                different at both the protocol and infrastructure levels.
              </p>
              <p>
                Tor relies on a network of volunteer-operated relays and a set
                of central directory authorities, and this infrastructure
                introduces a number of weaknesses and limitations. Because Tor’s
                circuit moderation is bandwidth-weighted, you are much more
                likely to use high-bandwidth nodes than low-bandwidth ones,
                meaning that a large percentage of Tor’s 7000+ nodes are
                underutilised due to having insufficient bandwidth.
                Additionally, Tor relies on a limited set of directory
                authorities. When these directory authorities are compromised or
                suffer from technical issues, the stability of the entire Tor
                network suffers because the network is unable to agree on what
                the node set is or the roles of nodes in the network (whether
                they were guard nodes, exit nodes, relays, etc.).
              </p>
              <p>
                Instead of relying on volunteers, Lokinet leverages the Oxen
                Service Node Network. Because Oxen’s service node operators are
                required to provide high-quality nodes — and are actively
                incentivised to do so — Lokinet’s relay network is consistent
                and reliable. Lokinet also inherits the market-based Sybil
                attack resistance of the Oxen blockchain, increasing Lokinet’s
                security against such attacks.
              </p>
              <p>
                Instead of Tor’s system of central directory authorities,
                Lokinet stores the state of the service node network on the
                blockchain. Every service node has access to this list, and
                comes to a consensus on it, making Lokinet significantly more
                decentralised than Tor.
              </p>
              <p>
                Lokinet is also more versatile than Tor — Tor operates on the
                transport layer and is only able to carry TCP traffic, while
                Lokinet operates on the network layer, meaning it can
                onion-route any IP-based protocol: TCP, UDP, ICMP, etc. This
                means Lokinet can be used for much more than just web browsing —
                it can also handle things like media streaming and video
                conferencing.
              </p>
            </AccordionSection>
            <AccordionSection title="IS LOKINET MORE PRIVATE THAN TOR?">
              <p>
                In its current state, Lokinet has a more limited anonymity set
                due to having fewer active users than Tor. However, Lokinet does
                have some important advantages over Tor, specifically in terms
                of Sybil attack resistance and decentralisation, which do make
                Lokinet more private in some circumstances.
              </p>
              <p>
                <strong>Sybil attack resistance </strong>
              </p>
              <p>
                The Tor network relies on volunteer-operated relays, with very
                little barrier to entry for operating a relay. As a result, the
                network is vulnerable to something called a Sybil attack, where
                an attacker initialises a large number of malicious nodes,
                eventually controlling enough nodes to give them control of the
                guard and exit nodes for a given target’s circuit. This allows
                the attacker to conduct granular traffic analysis,
                de-anonymising the user and any other circuits in which the exit
                and guard are owned by the attacker. Lokinet increases the
                financial cost of this attack by requiring service nodes to
                stake an amount of the Oxen token before being able to register
                as a service node on the network. This provides strong economic
                protection against Sybil attacks.
              </p>
              <p>
                <strong>Decentralisation</strong>
              </p>
              <p>
                One of Tor’s most well-documented weaknesses is its reliance on
                a relatively small set of central directory authority servers
                which allow clients to find nodes in the Tor network. If these
                directory authorities are compromised, it would endanger the
                stability of the entire Tor network.
              </p>
              <p>
                Instead of relying on central directory authorities, Lokinet
                uses the Oxen blockchain as a form of decentralised directory
                authority, meaning that Lokinet isn’t reliant on any kind of
                central server — the network is fully decentralised.
              </p>
            </AccordionSection>
            <AccordionSection title="WHAT IS ONS">
              <p>
                ONS provides human readable, globally unique mappings to
                cryptographically secure long form .loki addresses. ONS names
                are stored and indexed on the Oxen blockchain as transactions
                using a similar scheme to{" "}
                <ExternalLink text="Namecoin" url="https://www.namecoin.org/" />{" "}
                or <ExternalLink text="ENS" url="https://ens.domains/" />. You
                can read more about ONS (previously called Loki name system){" "}
                <ExternalLink
                  text="here"
                  url="https://github.com/oxen-io/oxen-core/issues/342"
                />
                . You can register one of these entries for up to 10 years. You
                can also periodically update the address that the mapping points
                to.
              </p>
            </AccordionSection>
            <AccordionSection title="HOW DO I SET UP ONS?">
              <p>
                ONS records are purchased using the OXEN cryptocurrency. By
                burning OXEN, you can register a Lokinet name for up to 10
                years. This can be done using the{" "}
                <ExternalLink
                  text="Oxen GUI wallet"
                  url="https://docs.oxen.io/downloads"
                />
                . Currently, you can register a Lokinet name for 1 year (15
                OXEN), 2 years (30 OXEN), 5 years (60 OXEN), or 10 years (90
                OXEN). In the wallet, you can select the .loki address you want
                to register, as well as the full Lokinet address you would like
                it to map to. Once you have purchased the ONS record, Lokinet
                users will be able to access your SNApp using either the name
                you purchase via ONS or its full Lokinet address.
              </p>
            </AccordionSection>
            <AccordionSection title="WHAT PROTOCOL DOES LOKINET USE?">
              <p>
                Lokinet is the reference implementation of{" "}
                <ExternalLink
                  text="LLARP"
                  url="https://github.com/majestrate/llarp"
                />{" "}
                (Low-Latency Anonymous Routing Protocol), a next-generation
                onion routing protocol that aims to address issues with Tor and
                I2P.
              </p>
            </AccordionSection>
            <AccordionSection title="WHAT CAN I ACCESS USING LOKINET?">
              <p>
                Using Lokinet, you can access any website on the normal internet
                or discover a whole new world of private and hidden websites
              </p>
              <p>
                Lokinet also enables access to SNApps — applications hosted on
                Oxen service nodes. SNApps are analogous to Tor’s hidden
                services, and typically appear in the form of internet addresses
                ending in ‘.loki’. Whenever anyone accesses a SNApp through
                Lokinet, the anonymity of both the user and the server is
                preserved by Lokinet’s onion routing protocol.
              </p>
              <p>
                Using exit nodes, users can also access clearnet websites over
                Lokinet, helping to anonymise normal internet browsing.
              </p>
            </AccordionSection>
            <AccordionSection
              title="IS LOKINET ENOUGH TO PROTECT MY PRIVACY WHEN I’M BROWSING THE INTERNET?
"
            >
              <p>
                Using Lokinet’s exit nodes, all internet traffic from your
                computer can be onion-routed over Lokinet. This prevents people
                from knowing which websites you are visiting.
              </p>
              <p>
                Your internet service provider may be able to see you are
                accessing Lokinet, but they will not know what websites you are
                looking at.
              </p>
            </AccordionSection>
            <AccordionSection title="HOW DO I USE LOKINET?">
              <p>
                You can use Lokinet on Windows, macOS, and Linux — and it’s easy
                to get up and running. Just go{" "}
                <ExternalLink
                  text="here"
                  url="https://github.com/oxen-io/loki-network/releases"
                />
                , download the Lokinet client for your platform, and follow the
                easy steps to enable Lokinet. You can then start browsing
                securely, privately, and anonymously. If you prefer to build the
                Lokinet client from source directly, you can find the source
                code on the{" "}
                <ExternalLink
                  text="Lokinet
                GitHub"
                  url="https://github.com/oxen-io/loki-network"
                />
                .
              </p>
            </AccordionSection>
            <AccordionSection title="IS LOKINET A VPN?">
              <p>
                Lokinet is not a VPN, however using Lokinet exit nodes provides
                similar functionality to a VPN. Typically, people use VPNs to
                increase their privacy online. VPNs prevent your internet
                service provider from knowing the websites you visit, and
                prevents the websites you visit from logging personal
                information (like your IP address).
              </p>
              <p>
                However, the key issue with a VPN is it requires you to place
                trust in your VPN provider. Your VPN provider has complete
                information about which websites you visit and personal
                information like your IP.
              </p>
              <p>
                Lokinet removes this trust, because it uses a decentralised
                network of nodes. No node in Lokinet’s network has complete
                information about you, so there is no way for an individual node
                to compromise your privacy.
              </p>
            </AccordionSection>
            <AccordionSection title="IS LOKINET BETTER THAN A VPN?">
              <p>
                Like a VPN, you can use Lokinet to improve the privacy and
                security of your online browsing. However, Lokinet offers
                additional benefits above a VPN.
              </p>
              <p>
                When you use a VPN, your VPN provider is able to collect
                information about you, such as your IP and the websites you are
                trying to access.
              </p>
              <p>
                Lokinet provides additional privacy and protection by being
                decentralised and onion-routed. Thanks to Lokinet’s
                decentralisation, no individual node (or server) used by Lokinet
                has complete information about you, so your privacy cannot be
                compromised. Onion routing also provides additional security.
              </p>
              <p>
                Lokinet also allows you to access SNApps, which are hidden,
                secure, and private websites only accessible using Lokinet.
              </p>
            </AccordionSection>
            <AccordionSection title="WHICH BROWSERS WORK WITH LOKINET?">
              <p>
                Lokinet can be used with absolutely any browser you can think
                of.
              </p>
              <p>
                Because Lokinet operates on the network layer, it can interact
                with any browser installed on your machine, and doesn’t require
                any specialised browser, add-ons, or scripts to work.
              </p>
            </AccordionSection>
            <AccordionSection title="WHICH APPLICATIONS WORK WITH LOKINET?">
              <p>
                Lokinet can be used with any application you use on your device.
              </p>
              <p>
                Lokinet is not only limited to web browsers, it can also be used
                to secure your traffic on other internet-based applications on
                your computer.
              </p>
            </AccordionSection>
            <AccordionSection title="WHO MADE LOKINET?">
              <p>
                Lokinet is developed by{" "}
                <ExternalLink text="OPTF" url="https://optf.ngo/" />,
                Australia’s first not-for-profit privacy tech organisation.
                Lokinet is part of the OPTF’s suite of blockchain-based privacy
                tools that also includes the encrypted messaging app{" "}
                <ExternalLink text="Session" url="https://getsession.org/" />,
                and the Oxen cryptocurrency itself.
              </p>
            </AccordionSection>
            <AccordionSection title="HOW CAN I SUPPORT LOKINET?">
              <p>
                Anyone can participate in the service node network that Lokinet
                relies on. The best way to support Lokinet is to support that
                network by operating or contributing to a service node.
              </p>
              <p>
                The larger the network, the stronger and more resilient Lokinet
                will become. Visit the official{" "}
                <ExternalLink
                  url="https://docs.oxen.io/using-the-oxen-blockchain/oxen-service-node-guides"
                  text="Oxen documentation"
                />{" "}
                for more information about how to run a service node.
              </p>
              <p>
                Beyond that — use Lokinet. Run a SNApp. Run it on your machine.
                Tell your friends about it. The more people who use Lokinet, the
                better. The most obvious reason being a strong core user base is
                core to the success of any technology, but beyond that — more
                people using Lokinet makes it more anonymous.
              </p>
            </AccordionSection>
            <AccordionSection title="WHAT ARE EXIT NODES?">
              <p>
                Exit nodes are specialised nodes that allow you to ‘exit’
                Lokinet and access the regular internet (often referred to as
                the clearnet).
              </p>
              <p>
                This means you can do all the things you’d normally do on the
                internet. Every site you browse, every meme you share, every
                video you stream — all that traffic is completely anonymised by
                Lokinet’s onion routing. With exit nodes, Lokinet functions
                similarly to a VPN — but better.
              </p>
              <p>
                When you enable exit node browsing and connect to an exit node
                through the Lokinet client, your traffic is encrypted multiple
                times, once for every node it will travel through, then sent to
                a Lokinet ‘edge node’ — your entry point to the Lokinet network.
                That node forwards your traffic through the network until it
                reaches a ‘pivot node’, which knows the location of the exit
                node you’re connecting to. That pivot node then relays your
                traffic — still fully encrypted — to the exit node. The exit
                node then decrypts your traffic and forwards it to its
                destination. The process for incoming traffic is the same in
                reverse. The exit node may know what traffic is passing through
                it, but it never knows who is sending or receiving that traffic.
              </p>
              <p>
                When you’re browsing through a Lokinet exit node, no other
                server, anywhere on the internet, ever gets the complete picture
                about what you’re accessing.
              </p>
            </AccordionSection>
            <AccordionSection title="HOW DO I USE AN EXIT NODE?">
              <p>
                Using Lokinet exit nodes is simple. All you have to do is open
                the Lokinet GUI on your platform of choice, type in the address
                of the exit node you would like to use, and enable the ‘Use
                exits’ toggle.
              </p>
              <p>
                If you would like to test out exit nodes, try out the address
                ‘exit.loki’.
              </p>
              <p>
                You can use online IP-checking services or a command line
                interface to check your IP. If you are successfully using the
                exit node, your IP address should change.
              </p>
            </AccordionSection>
          </Accordion>
          <h2>SNApps</h2>
          <Accordion>
            <AccordionSection title="WHAT IS A SNAPP?">
              <p>
                SNApps are private, secure, and hidden web applications.
                Usually, this means websites — like the one you are accessing
                right now.
              </p>
              <p>
                SNApps are analogous to Tor’s hidden services, and typically
                appear in the form of internet addresses ending in ‘.loki’.
                Whenever anyone accesses a SNApp through Lokinet, the anonymity
                of both the user and the server is preserved by Lokinet’s onion
                routing protocol.
              </p>
              <p>
                This means SNApp operators can publish content without worrying
                about having their privacy or anonymity jeopardised, and users
                can access it with the same peace of mind.
              </p>
            </AccordionSection>
            <AccordionSection title="DO SNAPPS RUN ON SERVICE NODES ONLY?">
              <p>
                When accessing a SNApp your data is obfuscated by being routed
                through multiple service nodes. However, the SNApp you are
                accessing can be hosted on any server, similar to hidden
                services in Tor. This means you do not have to operate a service
                node to operate a SNApp.
              </p>
            </AccordionSection>
            <AccordionSection title="ARE SNAPPS LIKE DAPPS?">
              <p>
                Although Lokinet is decentralised, SNApps are not decentralised
                applications. They are central servers, just like any other
                website you access on the internet.
              </p>
            </AccordionSection>
            <AccordionSection title="WHERE WILL SNAPPS AND ALL OF THEIR DATA BE HOSTED?">
              <p>
                SNApps are similar to hidden services in Tor; they are hosted on
                servers by users. What data is collected and how it is stored
                depends on the operator.
              </p>
              <p>
                Of course, information like your IP address is never exposed to
                the SNApp operator thanks to Lokinet’s onion-routing — so it
                can’t be collected.
              </p>
            </AccordionSection>
          </Accordion>
        </Flex>
      </Layout>
    </PageRoot>
  );
}
