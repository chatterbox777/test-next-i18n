const { i18n } = require("./next-i18next.config");
console.log("i18n: ", i18n);

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
};

module.exports = nextConfig;
