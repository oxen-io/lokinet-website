export interface IMetadata {
  DESCRIPTION: string;
  TYPE?: string;
  CANONICAL_URL?: string;
  OG_IMAGE?: {
    URL: string;
    WIDTH: number;
    HEIGHT: number;
    ALT: string;
  };
  TAGS?: string[];
  ARTICLE_SECTION?: string;
  PUBLISHED_TIME?: string;
}

const METADATA = {
  HOST_URL: "https://lokinet.org",
  SITE_NAME: "Lokinet",
  TITLE: "Lokinet | Anonymous internet access",
  DESCRIPTION:
    "Lokinet is an onion-router that lets you access the internet anonymously. Built on LLARP, the fastest onion-routing protocol in the world. ",
  TAGS: [
    "Privacy",
    "decentralisation",
    "decentralised",
    "Open Source",
    "Onion routing",
    "VPN",
    "Anonymity",
    "Networking",
  ],
  OG_TYPE: "website",
  OG_IMAGE: {
    URL: "/site-banner.png",
    WIDTH: 800,
    HEIGHT: 450,
    ALT: "Lokinet Banner White Background",
  },
  LOCALE: "en_US",
  FAVICON: {
    MEDIUM: "/favicon-32x32.png",
    SMALL: "/favicon-16x16.png",
    APPLE_TOUCH_ICON: "/apple-touch-icon.png",
  },
  MANIFEST: "/site.webmanifest",
  MASK_ICON: { PATH: "/safari-pinned-tab.svg", COLOR: "#5bbad5" },
  MSAPPLICATION_TILECOLOR: "#ffffff",
  THEME_COLOR: "#ffffff",
  TWITTER_CREATOR: "Lokinet_org",
  FAQ_PAGE: {
    TYPE: "FAQPage",
    DESCRIPTION:
      "Lokinet’s FAQ | Find answers to some of the most frequently asked questions about Lokinet — info on the team, the tech, and the technicalities.",
  },
  PRIVACY_PAGE: {
    DESCRIPTION:
      "Lokinet’s Privacy Policy | Lokinet never knows who you are or what websites you visit.",
  },
};

export default METADATA;
