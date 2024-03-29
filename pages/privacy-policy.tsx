import { ExternalLink } from "../components/ExternalLink";
import Layout from "../components/layout/Layout";
import METADATA from "../constants/metadata";
import { PageRoot } from "../components/layout/PageRoot";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <PageRoot>
      <Layout title={"Privacy Policy"} metadata={METADATA["PRIVACY_PAGE"]}>
        <h1>Lokinet Privacy Policy</h1>
        <p>
          <i>Last Updated: 30 August 2022</i>
        </p>
        <h3>
          TDLR; Lokinet never knows who you are or what websites you visit.
        </h3>
        <br />
        <h2>1. Lokinet App</h2>

        <p>We are mission-driven to protect your privacy.</p>
        <p>
          Lokinet is designed so that it doesn’t access, create, or store any
          information which could be used to identify or track you. Lokinet
          doesn’t store any identifying information about your device or
          connection, such as your IP address.{" "}
        </p>
        <p>
          There is no registration process for Lokinet. You don’t need a phone
          number, email, or any information tied to your real identity to use
          Lokinet. We did this so that you’ll know you’re private and anonymous
          whenever you use Lokinet.
        </p>
        <p>
          We don’t have control over what services you access using Lokinet.
          They may attempt to track or log information about you. For more
          information, it is important that you refer to the privacy policy of
          the service you are accessing.{" "}
        </p>
        <h2>2.Using Lokinet on a MacOS or Windows device</h2>
        <p>
          If you use Lokinet on your macOS or Windows computer, Apple or
          Microsoft might store information about how you use the app.
        </p>

        <p>
          <ExternalLink
            url="https://support.apple.com/en-au/guide/mac-help/mh27990/mac"
            text="MacOS analytics"
          />{" "}
          and{" "}
          <ExternalLink
            url="https://docs.microsoft.com/en-au/windows/privacy/windows-diagnostic-data"
            text="Windows diagnostic data collection"
          />{" "}
          may record app crashes or usage information, depending on your
          personal operating system settings. This is a feature of these
          operating systems and applies to any software you use. Lokinet itself
          never records stores, or shares any of this information.
        </p>
        <h2>3. Website Privacy Policy</h2>
        <p>
          The Lokinet website never attempts to link your usage of the website
          to your real identity or create a user profile based on your activity.
          The Lokinet website can also be accessed anonymously, using Lokinet,{" "}
          <ExternalLink
            url="http://inqomcym4rhouwhxhnwcczj3j8ykb4ehxkh3yfqtpjybatdettuo.loki/"
            text="here"
          />
          .
        </p>
        <p>
          We do not use any cookies on our website to track information, and
          access logs on the Lokinet.org server are automatically deleted every
          twenty four hours.
        </p>
        <p>
          We do not and cannot share any information related to you or your
          access of the Lokinet website.
        </p>
        <h2>4. Updates</h2>
        <p>
          We will update this privacy policy as needed so that it is current and
          accurate. Your continued use of Lokinet confirms your acceptance of
          our updated Privacy Policy.
        </p>
        <h2>5. Get in touch! </h2>
        <p>
          If you would like more information about Lokinet’s Privacy Policy, or
          have suggestions about how we can better protect your privacy, or just
          want to say hello — please send us an email at{" "}
          <ExternalLink url="mailto:team@lokinet.org" text="team@lokinet.org" />
          .
        </p>
      </Layout>
    </PageRoot>
  );
}
