import Image from "next/image";

import WorldSection from "./components/WorldSection";
import PlayersSection from "./components/PlayersSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import mythodiaMap from "../../public/images/mythodia-map.png";

const HomePage = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <>
      <h1 className="text-4xl font-medium mb-2">The universe of Mythodia</h1>
      <div className="flex flex-col gap-8">
        <WorldSection
          setModalImageSrc={setModalImageSrc}
          setShowImageModal={setShowImageModal}
        />
        <PlayersSection
          setModalImageSrc={setModalImageSrc}
          setShowImageModal={setShowImageModal}
        />
      </div>
    </>
  );
};

export default HomePage;
