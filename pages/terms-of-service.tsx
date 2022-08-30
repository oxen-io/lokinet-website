import { ExternalLink, StyledLink } from "../components/ExternalLink";
import Layout from "../components/layout/Layout";
import METADATA from "../constants/metadata";
import { PageRoot } from "../components/layout/PageRoot";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledListItem = styled.li`
  padding-bottom: 16px;
`;

export default function TermsOfService() {
  return (
    <PageRoot>
      <Layout
        title={"Terms Of Service"}
        metadata={METADATA["TERMS_OF_SERVICE"]}
      >
        <h1>Lokinet Terms of Service</h1>
        <p>
          <i>Last Updated: 30 August 2022</i>
        </p>
        <p>
          These Terms of Service (“Terms”) govern your access to and use of our
          services that are fully owned and operated by the Oxen Privacy Tech
          Foundation (referred to as “we”, “our”, “OPTF”) including the
          Lokinet.org and the Lokinet App (collectively, referred to as the
          “Services”) and any information, text, links, graphics, videos, audio
          or other material uploaded, downloaded or appearing on the Services
          (collectively, referred to as “Content”).
        </p>
        <p>
          These Terms and the Lokinet Privacy Policy form the End User Agreement
          between you and the OPTF.
        </p>
        <p>
          The Services are fully owned and delivered by the Oxen Privacy Tech
          Foundation (OPTF), a not-for-profit charity registered in Australia.
        </p>
        <h2>1. Who can use the Services</h2>
        <p>
          Anyone who is not barred from using the Services under the laws of the
          applicable jurisdiction, and is at least 13 years of age can use the
          Service. If you are living in the United Kingdom or a European Union
          country, you must be at least 16 years old.
        </p>
        <p>
          By using these Services, you agree to form a binding End User
          Agreement between you and the OPTF.
        </p>
        <p>
          If you are accepting these Terms and using the Services on behalf of a
          company, organisation, government, or other legal entity, you
          represent and warrant that you are authorised to do so and have the
          authority to bind such entity to these Terms, in which case the words
          “you” and “your” as used in these Terms shall refer to such entity.
        </p>
        <h2>2. Our Privacy Policy</h2>
        <p>
          Privacy is central to our purpose and mission. For more details,
          please refer to the{" "}
          <Link href="/privacy-policy" passHref={true}>
            <StyledLink>Lokinet Privacy Policy</StyledLink>
          </Link>
          .
        </p>
        <h2>3. Our Services</h2>
        <p>
          Our Services are intended to inform you and educate you about Lokinet
          (via Lokinet.org), and facilitate anonymous internet access (Lokinet
          App).
        </p>
        <h3>3.1. Using the Lokinet Website</h3>
        <p>
          The purpose of the Lokinet Website (lokinet.org) is primarily to
          provide you with information about the Lokinet App and to provide
          access to the Lokinet App via download. We have done our best to make
          sure this information is accurate and up-to-date, however, there may
          be unintentional errors which may mislead you. Therefore, we encourage
          you to contact us for any clarifications.
        </p>
        <h3>3.2. Using the Lokinet App</h3>
        <p>
          The purpose of the Lokinet App is to facilitate anonymous internet
          access including creating and accessing SNapps (private, secure, and
          hidden web applications) and other web services while minimising the
          capture or sharing of personal data. It was intentionally created for
          use by individuals who require anonymity and security.
        </p>
        <h2>4. Our Responsibilities and Commitments to You</h2>
        <p>
          We are committed to ensuring the delivery of our Services in a way
          that is accessible and reliable.
        </p>
        <p>
          Licence to use — OPTF grants you a licence to use Lokinet in a
          limited, revocable, non-exclusive, and non-transferable licence to use
          our Services in accordance with these Terms. It should also be noted
          that the software code related to Lokinet is licensed under the GNU
          Public License version 3.
        </p>
        <p>
          Availability of Our Services — We strive to ensure that our Services
          are continuously available for use. However, there may be occasions
          when they are interrupted, including for maintenance, upgrades, or to
          resolve network or equipment failures. We may discontinue some or all
          of our Services, including certain features and the support for
          certain devices and platforms.
        </p>
        <p>
          Keeping you informed — We continuously provide updates about our
          Services through various channels, including the Oxen Blog, Oxen and
          Lokinet Twitter Account and a number of community groups on Telegram.
          Where possible, we will strive to keep you updated about outages and
          service disruptions through these channels.
        </p>
        <h2>5. Your Responsibilities and Rights</h2>
        <h3>5.1. Account Management and General Use</h3>
        <p>
          Software and account — You are responsible for keeping your device and
          the Lokinet App up-to-date.
        </p>
        <p>
          Fees and Taxes — You are responsible for data and mobile carrier fees
          and taxes associated with the devices on which you use our Services.
        </p>
        <p>
          Terms and Policies — You must use our Services according to our Terms
          and policies.
        </p>
        <p>
          Legal and Acceptable Use — You agree to use our Services only for
          legal, authorised, and acceptable purposes. You will not use (or
          assist others in using) our Services in ways that: (a) violate or
          infringe the rights of Lokinet, our users, or others, including
          privacy, publicity, intellectual property, or other rights; (b)
          involve sending illegal or impermissible communications such as bulk
          messaging, auto-messaging, and auto-dialling; (c) breach the Lokinet
          Content Policy (5.2) described further below.
        </p>
        <p>
          Harm to Lokinet — You must not (or assist others to) access, use,
          modify, distribute, transfer, or exploit our Services in unauthorised
          manners, or in ways that harm Lokinet, our Services, or systems. For
          example you must not (a) gain or try to gain unauthorised access to
          our Services or systems; (b) disrupt the integrity or performance of
          our Services; (c) create accounts for our Services through
          unauthorized or automated means; (d) collect information about other
          Lokinet users in any unauthorised manner; or (e) sell, rent, or charge
          for our Services.
        </p>
        <p>
          Third-party services — Our Services may allow you to access, use, or
          interact with third-party websites, apps, content, and other products
          and services run by third parties. When you use third-party services,
          their terms and privacy policies govern your use of those services.
          When using SNapps operated by third-parties, these Terms as well as
          any terms or policies associated with the Open Group will govern your
          use.
        </p>
        <p>
          Your Content — You own and/or take responsibility for the content
          (text messages, audio, video, images) you submit through our Services.
          We can not access this information unless you explicitly send it to
          us, or it is published in an accessible way through a SNApp, and you
          share details on how to access the SNApp.
        </p>
        <p>
          Lokinet’s Rights — You acknowledge that the OPTF owns all copyrights,
          trademarks, domains, logos, trade dress, trade secrets, patents, and
          other intellectual property rights associated with our Services. You
          may not use our copyrights, trademarks, domains, logos, trade dress,
          patents, and other intellectual property rights unless you have our
          written permission. To report copyright, trademark, or other
          intellectual property infringement, please contact{" "}
          <ExternalLink
            url="mailto:support@lokinet.org"
            text="support@lokinet.org"
          />
          .
        </p>
        <h3>5.2. Lokinet Content Policy</h3>
        <p>
          OPTF exists to build private and secure technology, and defend your
          right to privacy and security in the digital world. We are also
          mission-driven to uphold key democratic, media freedom and human
          rights principles.
        </p>
        <p>
          To enable us to uphold our mission principles, we have identified the
          following activities of Lokinet as a clear breach of these Terms.
        </p>
        <p>
          <b>Violent Behaviour, Violent Extremism and Terrorism</b>
        </p>
        <p>Lokinet cannot be used to:</p>
        <ul>
          <StyledListItem>
            to glorify violence, or promote violence of any form (physical,
            psychological, sexual) against another individual or group, or
            incite harm or directly attack or threaten other people on the basis
            of race, ethnicity, national origin, caste, sexual orientation,
            gender, gender identity, religious affiliation, age, disability, or
            serious disease.
          </StyledListItem>
          <StyledListItem>
            by organisations, groups and individuals designated by the United
            Nations as terrorist organisations or terrorists.
          </StyledListItem>
        </ul>
        <p>
          <b>Child Sexual Exploitation</b>
        </p>
        <p>
          Lokinet cannot be used to organise or promote child sexual
          exploitation. A child is defined as anyone under the age of 18.
          Specifically, Lokinet and Lokinet SNapps cannot be used to access,
          store or share:
        </p>
        <ul>
          <StyledListItem>
            visual depictions of a child engaging in sexually explicit or
            sexually suggestive acts;
          </StyledListItem>
          <StyledListItem>
            illustrated, computer-generated or other forms of realistic
            depictions of a human child in a sexually explicit context, or
            engaging in sexually explicit acts;
          </StyledListItem>
          <StyledListItem>
            sexualized commentaries about or directed at a known or unknown
            minor;
          </StyledListItem>
          <StyledListItem>
            links to third-party sites that host child sexual exploitation
            material;
          </StyledListItem>
          <StyledListItem>
            fantasies about or promoting engagement in child sexual
            exploitation;
          </StyledListItem>
          <StyledListItem>
            recruiting, advertising or expressing an interest in a commercial
            sex act involving a child, or in harboring and/or transporting a
            child for sexual purposes.
          </StyledListItem>
        </ul>
        <p>
          <b>Extremely Violence and/or Graphic Content</b>
        </p>
        <p>
          Lokinet and Lokinet SNapps cannot be used to access, store or share
          violent or gory content that is intended to shock or disgust others,
          or create harm or distress to the person or persons represented in the
          content.
        </p>
        <p>
          <b>Harmful and/or Unlawful Content</b>
        </p>
        <p>
          Lokinet and Lokinet SNapps cannot be used for cyber abuse,
          non-consensual sharing of intimate images and abhorrent violent
          material.
        </p>
        <h2>6.0 Monitoring Lokinet and Lokinet SNapp Breaches</h2>
        <p>
          Our Services have been created using a privacy-by-design approach
          which means that it is impossible for us to analyse or monitor content
          you access using Lokinet.. Our onion-routed approach to internet
          access maximises your anonymity and preserves privacy.
        </p>
        <p>
          OPTF does not have the capacity to monitor all SNapps, however, we do
          make a concerted effort to monitor and where necessary moderate SNapps
          that have been created by us.
        </p>
        <h3>6.1 Third-party notification of breaches</h3>
        <p>
          We may be notified by third-parties of breaches to these Terms. In
          such cases, the evidence presented by the third-parties will be
          assessed by our Board and Members, to determine the severity of the
          breach and the required outcomes. We may engage external experts to
          further assist and inform us. The decisions made by our Board and
          Members will be final.
        </p>
        <p>
          All notifications, including requests for information or take down
          notices, will be documented in our Transparency Report that is updated
          every three months.
        </p>
        <h2>7.0 Disclaimers and Limitations</h2>
        <p>
          Disclaimers — YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE
          FOLLOWING DISCLAIMERS. WE PROVIDE OUR SERVICES ON AN “AS IS” BASIS
          WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
          TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER
          HARMFUL CODE. Session DOES NOT WARRANT THAT ANY INFORMATION PROVIDED
          BY US IS ACCURATE, COMPLETE, OR USEFUL, THAT OUR SERVICES WILL BE
          OPERATIONAL, ERROR-FREE, SECURE, OR SAFE, OR THAT OUR SERVICES WILL
          FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS. WE DO NOT
          CONTROL, AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR
          USERS USE OUR SERVICES. WE ARE NOT RESPONSIBLE FOR THE ACTIONS OR
          INFORMATION (INCLUDING CONTENT) OF OUR USERS OR OTHER THIRD PARTIES.
          YOU RELEASE US, AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS,
          AND AGENTS (TOGETHER, “SESSION PARTIES”) FROM ANY CLAIM, COMPLAINT,
          CAUSE OF ACTION, CONTROVERSY, OR DISPUTE (TOGETHER, “CLAIM”) AND
          DAMAGES, KNOWN AND UNKNOWN, RELATING TO, ARISING OUT OF, OR IN ANY WAY
          CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD PARTIES.
        </p>
        <p>
          Limitation of Liability — THE SESSION PARTIES WILL NOT BE LIABLE TO
          YOU FOR ANY LOST PROFITS OR CONSEQUENTIAL, SPECIAL, PUNITIVE,
          INDIRECT, OR INCIDENTAL DAMAGES RELATING TO, ARISING OUT OF, OR IN ANY
          WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES, EVEN IF THE
          SESSION PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          OUR AGGREGATE LIABILITY RELATING TO, ARISING OUT OF, OR IN ANY WAY IN
          CONNECTION WITH OUR TERMS, US, OR OUR SERVICES WILL NOT EXCEED TEN
          DOLLARS ($10). THE FOREGOING DISCLAIMER OF CERTAIN DAMAGES AND
          LIMITATION OF LIABILITY WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY
          APPLICABLE LAW. THE LAWS OF SOME STATES OR JURISDICTIONS MAY NOT ALLOW
          THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE
          EXCLUSIONS AND LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU.
          NOTWITHSTANDING ANYTHING TO THE CONTRARY IN OUR TERMS, IN SUCH CASES,
          THE LIABILITY OF THE SESSION PARTIES WILL BE LIMITED TO THE FULLEST
          EXTENT PERMITTED BY APPLICABLE LAW.
        </p>
        <h2>8.0. Resolving Disputes and Ending Terms</h2>
        <p>
          Resolving disputes — You agree to resolve any Claim you have with us
          relating to or arising out of our Terms, us, or our Services
          exclusively in the state of Victoria, Australia. You also agree to
          submit to the personal jurisdiction of such courts for the purpose of
          litigating all such disputes. The laws of Australia govern our Terms,
          as well as any disputes, whether in court or arbitration, which might
          arise between Session and you, without regard to conflict of law
          provisions.
        </p>
        <p>
          Ending these Terms — You may end these Terms with Lokinet at any time
          by deleting Lokinet from your device and discontinuing use of our
          Services. We may modify, suspend, or terminate your access to or use
          of our Services anytime for any reason, such as if you violate the
          letter or spirit of our Terms or create harm, risk, or possible legal
          exposure for Lokinet. The following provisions will survive
          termination of your relationship with Lokinet: “Licenses,”
          “Disclaimers,” “Limitation of Liability,” “Resolving dispute,”
          “Availability” and “Ending these Terms,” and “General”.
        </p>
        <h2>9.0 These Terms</h2>
        <p>
          Session may update the Terms at any time. When we update our Terms, We
          will update the “Last Modified” date associated with the updated
          Terms. Your continued use of our Services confirms your acceptance of
          our updated Terms and supersedes any prior agreed Terms. You will
          comply with all applicable export control and trade sanctions laws.
          Our Terms cover the entire agreement between you and Session regarding
          our Services. If you do not agree with our Terms, you should stop
          using our Services.
        </p>
        <p>
          If we fail to enforce our Terms, we do not waive the right to enforce
          them. If any provision of the Terms is deemed unlawful, void, or
          unenforceable, that provision shall be deemed severable from our Terms
          and shall not affect the enforceability of the remaining provisions.
          Our Services are not intended for distribution to or use in any
          country where such distribution or use would violate local law or
          would subject us to any regulations in another country. If you have
          specific questions about these Terms, please contact us at{" "}
          <ExternalLink
            url="mailto:support@lokinet.org"
            text="support@lokinet.org"
          />
          .
        </p>
      </Layout>
    </PageRoot>
  );
}
