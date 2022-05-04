const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["three"]);

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${
    process.env.NODE_ENV == "development"
      ? "'unsafe-eval' 'unsafe-inline' "
      : ""
  };
  child-src 'self';
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src 'self' blob: data:;
  media-src 'self';
  connect-src *;
  font-src 'self' blob: data: fonts.gstatic.com maxcdn.bootstrapcdn.com;
  worker-src 'self' blob:;
`;

const securityHeaders = () => {
  const headers = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "Content-Security-Policy",
      value: ContentSecurityPolicy.replace(/\n/g, ""),
    },
  ];
  return headers;
};

const config = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders(),
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/linux",
        destination: "/api/download/linux",
      },
      {
        source: "/windows",
        destination: "/api/download/windows",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = withPlugins([withTM], config);
