const config = {
  compiler: {
    styledComponents: true,
  },
  // .env.local doesn't load itself
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT_ID: process.env.CONTENTFUL_ENVIRONMENT_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = config;
