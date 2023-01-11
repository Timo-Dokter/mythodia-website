import { useState } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

import BaseLayout from "../modules/common/layouts/BaseLayout";
import ImageModal from "../modules/common/ui/ImageModal";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const Layout = Component.Layout || BaseLayout;

  return (
    <Layout>
      <Component
        setShowImageModal={setShowImageModal}
        setModalImageSrc={setModalImageSrc}
        {...pageProps}
      />
      {showImageModal && (
        <ImageModal
          setShowImageModal={setShowImageModal}
          modalImageSrc={modalImageSrc}
        />
      )}
    </Layout>
  );
}

export default MyApp;
