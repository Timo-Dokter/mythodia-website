import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

// import ImageCarousel from "../../common/ui/ImageCarousel";

import xeor from "../../../public/images/characters/players/xeor.png";
import daisy from "../../../public/images/characters/players/daisy.png";
import cosmo from "../../../public/images/characters/players/cosmo.png";
import curundil from "../../../public/images/characters/players/curundil.png";
import dm from "../../../public/images/characters/players/the-dm.png";

const PlayersSection = ({ setShowImageModal, setModalImageSrc }) => {
  SwiperCore.use([Autoplay]);

  return (
    <section className="flex gap-2 flex-col-reverse md:flex-row">
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={"w-full md:w-1/4 h-44"}
      >
        <SwiperSlide className="flex justify-center">
          <Image
            src={xeor}
            alt={"Xeor"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(xeor);
            }}
            className="cursor-pointer h-full w-fit"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src={cosmo}
            alt={"Cosmo"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(cosmo);
            }}
            className="cursor-pointer h-full w-fit"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src={daisy}
            alt={"Daisy"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(daisy);
            }}
            className="cursor-pointer h-full w-fit"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src={curundil}
            alt={"Curundil"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(curundil);
            }}
            className="cursor-pointer h-full w-fit"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Image
            src={dm}
            alt={"DM"}
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(dm);
            }}
            className="cursor-pointer h-full w-fit"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex-1 text-lg leading-5">
        The campaign is played by the following characters:
        <ul className="flex flex-col gap-1 list-disc list-inside">
          <li>
            <a href="/players/xeor" className="underline font-bold">
              Xeor Thundershadow
            </a>
            , The Leonin ranger - Drakewarden
          </li>
          <li>
            <a href="/players/cosmo" className="underline font-bold">
              Cosmo Julius Cosma
            </a>
            , The Fairy sorcerer - Lunar magic
          </li>
          <li>
            <a href="/players/daisy" className="underline font-bold">
              Daisy Peony Mullien Hawthorn
            </a>
            , The Fairy ranger - Beastmaster
          </li>
          <li>
            <a href="/players/morleg" className="underline font-bold">
              Curundil M. L??mion
            </a>
            , The Elven bard - College of Eloquence
          </li>
          <li>
            <a href="/players/dm" className="underline font-bold">
              DM
            </a>
            , The dungeon master - Master of planes
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlayersSection;
