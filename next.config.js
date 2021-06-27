module.exports = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();
