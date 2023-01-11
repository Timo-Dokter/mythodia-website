import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import mythodiaMap from "../../public/images/mythodia-map.png";
import xeor from "../../public/images/characters/players/xeor.png";
import daisy from "../../public/images/characters/players/daisy.png";
import curundil from "../../public/images/characters/players/curundil.png";
import dm from "../../public/images/characters/players/the-dm.png";

const HomePage = ({ setShowImageModal, setModalImageSrc }) => {
  return (
    <>
      <h1 className="text-4xl font-medium mb-2">The universe of Mythodia</h1>
      <div className="flex flex-col gap-8">
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
            The world of Mythodia is one that I created for a campaign I run for
            a group of friends. This world centers around dragons, with each
            state having its own dragon as a protector. The dragons are known
            throughout the world and are feared by those who should be. They do
            not necessarily rule the states, but they are trusted by everyone in
            their respective state. The rulers of the states come to the dragons
            for advice and aid when necessary.
          </p>
        </section>
        <section className="flex gap-2 flex-col-reverse md:flex-row">
          <div className="flex-1 text-lg leading-5">
            The campaign is played by the following characters:
            <ul className="list-disc list-inside">
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
                  Curundil M. Lómion
                </a>
                , The Elven bard - College of Eloquence
              </li>
              <li>
                <a href="/players/dylan" className="underline font-bold">
                  Dylan je hebt tot 21 januari!
                </a>
                , The Loxodon monk - sub-class niet bekend
              </li>
              <li>
                <a href="/players/dm" className="underline font-bold">
                  DM
                </a>
                , The dungeon master
              </li>
            </ul>
          </div>
          <div className="relative flex-1 flex">
            <div className="w-1/4">
              <Image
                src={xeor}
                alt={"Xeor"}
                onClick={(e) => {
                  setShowImageModal(true);
                  setModalImageSrc(xeor);
                }}
                className="cursor-pointer"
              />
              <Image
                src={xeor}
                alt={"Cosmo"}
                onClick={(e) => {
                  setShowImageModal(true);
                  setModalImageSrc(mythodiaMap);
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="w-1/4">
              <Image
                src={daisy}
                alt={"Daisy"}
                onClick={(e) => {
                  setShowImageModal(true);
                  setModalImageSrc(daisy);
                }}
                className="cursor-pointer"
              />
              <Image
                src={curundil}
                alt={"Curundil"}
                onClick={(e) => {
                  setShowImageModal(true);
                  setModalImageSrc(curundil);
                }}
                className="cursor-pointer"
              />
            </div>

            <Image
              src={dm}
              alt={"Dylan schiet de fuck op met je char"}
              onClick={(e) => {
                setShowImageModal(true);
                setModalImageSrc(mythodiaMap);
              }}
              className="cursor-pointer w-1/4"
            />
            <Image
              src={dm}
              alt={"DM"}
              onClick={(e) => {
                setShowImageModal(true);
                setModalImageSrc(dm);
              }}
              className="cursor-pointer w-1/4"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
