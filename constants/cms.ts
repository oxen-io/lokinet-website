import isLive from "../utils/environment";

const CMS = {
  // Next.js will try and re-build the page when a request comes in
  // every 10 minutues for production and every 30 seconds for staging
  CONTENT_REVALIDATE_RATE: isLive() ? 600 : 30,
};

export default CMS;
