import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import mythodiaMap from "../../public/images/mythodia-map.png";

const HomePage = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <>
      <h1 className="text-4xl font-medium mb-2">The universe of Mythodia</h1>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Image
            src={mythodiaMap}
            alt={"An image of the world"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(mythodiaMap);
            }}
            className="cursor-pointer opacity-100"
          />
        </div>
        <p className="flex-1 text-lg">
          The universe of Mythodia is a world i created for a campaign i run for
          a group of friends. The world is centered around dragons, with each
          state having their own dragon as protector. The dragons are known
          through out the world and are feared by those who should. They don't
          necessarily rule the states but they are trusted by everyone in their
          respective state and the rulers of said states come to the dragons for
          advice and aid when necessary.
        </p>
      </div>
      {/* <FontAwesomeIcon icon={icons.faUser} className="text-xl w-5 pr-5" /> */}
    </>
  );
};

export default HomePage;
