import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";

import BaseLayout from "../modules/common/layouts/BaseLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || BaseLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
