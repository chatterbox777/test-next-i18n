import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../next-i18next.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
