// const I18NextHttpBackend = require("i18next-http-backend");

// module.exports = {
//   i18n: {
//     defaultLocale: "en",
//     locales: ["en", "ru"],

//     backend: {
//       loadPath: `http://localhost:3000/api/locales/{{lng}}/{{ns}}`,
//     },
//     request: function (options, url, payload, callback) {
//       console.log('ist next-18next config baby');
//       console.log('callback: ', callback);
//       console.log('payload: ', payload);
//       console.log('url: ', url);
//       console.log('options: ', options);
//     }
//   },
//   debug: true,
//   ns: ["common"],
//   serializeConfig: false,
//   use: [I18NextHttpBackend]
// };

const I18nextChainedBackend = require("i18next-chained-backend/dist/cjs/i18nextChainedBackend");
const I18NextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  debug: true,
  lng: "ru",
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
  },
  fallbackLng: "en",
  // defaultNS: "header",
  ns: ["header"],
  reloadOnPrerender: false,
  serializeConfig: false,
  use: [I18nextChainedBackend],
  backend: {
    backends: [I18NextHttpBackend],
    backendOptions: [
      {
        loadPath:
          "http://2043425.wetcat.web.hosting-test.net/{{lng}}/{{ns}}.json",
        crossDomain: true,
        requestOptions: {
          mode: "no-cors",
          cache: "default",
        },
      },
    ],
  },
  request: function (options, url, payload, callback) {
    debugger
    console.log("ist next-18next config baby");
    console.log("callback: ", callback);
    console.log("payload: ", payload);
    console.log("url: ", url);
    console.log("options: ", options);
  },
};
