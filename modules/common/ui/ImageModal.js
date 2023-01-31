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
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => setShowImageModal(false)}
    >
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center bg-gray-600 bg-opacity-70 sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            <div className="bg-white px-4 py-4">
              {typeof modalImageSrc == "object" ? (
                <Image
                  src={modalImageSrc}
                  alt="img on modal"
                  className="sm:max-h-184 sm:max-w-7xl"
                />
              ) : (
                <img
                  src={modalImageSrc}
                  alt="img on modal"
                  className="sm:max-h-184 sm:max-w-7xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
