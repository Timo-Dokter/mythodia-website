import { useState } from "react";
import { useRouter } from "next/router";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

import BaseLayout from "../modules/common/layouts/BaseLayout";
import ImageModal from "../modules/common/ui/ImageModal";

config.autoAddCss = false;

const Mythodia = ({ Component, pageProps }) => {
  const [role, setRole] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const router = useRouter();

  const Layout = Component.Layout || BaseLayout;

  const selectRole = (e, role) => {
    setRole(role);
    e.preventDefault();
    router.push("/game");
  };

  return (
    <Layout>
      <Component
        selectRole={selectRole}
        role={role}
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
};

export default Mythodia;
