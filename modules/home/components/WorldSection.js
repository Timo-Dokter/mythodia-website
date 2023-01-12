import Image from "next/image";

import mythodiaMap from "../../../public/images/mythodia-map.png";

const WorldSection = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <section className="flex gap-2 flex-col md:flex-row">
      <div className="relative flex-1">
        <Image
          src={mythodiaMap}
          alt={"An image of the world"}
          onClick={(e) => {
            setShowImageModal(true);
            setModalImageSrc(mythodiaMap);
          }}
          className="cursor-pointer"
        />
      </div>
      <p className="flex-1 text-lg leading-5">
        The world of Mythodia is one that I created for a campaign I run for a
        group of friends. This world centers around dragons, with each state
        having its own dragon as a protector. The dragons are known throughout
        the world and are feared by those who should be. They do not necessarily
        rule the states, but they are trusted by everyone in their respective
        state. The rulers of the states come to the dragons for advice and aid
        when necessary.
      </p>
    </section>
  );
};

export default WorldSection;
