import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const LinkSection = () => {
  return (
    <section className="flex flex-wrap flex-col md:flex-row justify-around">
      <div className="text-center mb-4 md:w-1/5">
        <Link
          href={"/players/"}
          className="block px-3 py-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-black font-bold shadow hover:bg-light-brown hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={icons.faUser} className={"pr-2"} />
          Players
        </Link>
        Descriptions for each player character and their abilities, traits, etc.
      </div>
      <div className="text-center mb-4 md:w-1/5">
        <Link
          href={"/npcs/"}
          className="block px-3 py-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-black font-bold shadow hover:bg-light-brown hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={icons.faUsers} className={"pr-2"} />
          Non-player characters
        </Link>
        Descriptions for each non-player character and their abilities, traits,
        etc.
      </div>
      <div className="text-center mb-4 md:w-1/5">
        <Link
          href={"/items/"}
          className="block px-3 py-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-black font-bold shadow hover:bg-light-brown hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={icons.faUser} className={"pr-2"} />
          Items
        </Link>
        Homebrew items i created myself or used from someone else.
      </div>
      <div className="text-center mb-4 md:w-1/5">
        <Link
          href={"/world/"}
          className="block px-3 py-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-black font-bold shadow hover:bg-light-brown hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={icons.faGlobe} className={"pr-2"} />
          World
        </Link>
        Information on the states, important cities and other interesting
        information on the world
      </div>
    </section>
  );
};

export default LinkSection;
