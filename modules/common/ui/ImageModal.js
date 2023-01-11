import Image from "next/image";
import { useEffect } from "react";

const ImageModal = ({ showImageModal, setShowImageModal, modalImageSrc }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        setShowImageModal(false);
      }
    });
  }, []);

  return (
    <div
      className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-600 bg-opacity-60 cursor-pointer"
      onClick={() => {
        setShowImageModal(false);
      }}
    >
      <div className="relative max-w-7xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="p-6 space-y-6">
            <Image
              src={modalImageSrc}
              alt="img on modal"
              className="opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
