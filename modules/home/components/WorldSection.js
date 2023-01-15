import Image from "next/image";

import mythodiaMap from "../../../public/images/mythodia-map.png";

const WorldSection = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <section className="flex gap-2 flex-col md:flex-row">
      <p className="flex-1 text-lg leading-5">
        {/* The world of Mythodia is one that I created for a campaign I run for a
        group of friends. This world centers around dragons, with each state
        having its own dragon as a protector. The dragons are known throughout
        the world and are feared by those who should be. They do not necessarily
        rule the states, but they are trusted by everyone in their respective
        state. The rulers of the states come to the dragons for advice and aid
        when necessary. */}
        In Mythodia, dragons are not just protectors, but also revered creatures
        with great wisdom and power. They are believed to have been created by
        the gods to maintain balance and order in the world. Each dragon has its
        own unique abilities and characteristics, making them valuable allies
        and formidable enemies. The dragons are also responsible for maintaining
        the natural balance in their respective states, ensuring that the
        environment and creatures within it thrive. They are deeply connected to
        the land and can sense any disturbances in the balance. The dragons are
        also immortal, and it is believed that they will continue to protect and
        guide their states even after the rulers have long passed. This creates
        a deep sense of respect and reverence for the dragons among the people
        of Mythodia.
      </p>
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
    </section>
  );
};

export default WorldSection;
