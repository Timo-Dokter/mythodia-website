import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const LinkSection = () => {
  return (
    <section className="flex flex-wrap flex-col-reverse md:flex-row justify-around">
      <div className="text-center w-1/5">
        <Link
          href={"/players/"}
          className="block p-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-white font-bold shadow hover:bg-parchment hover:text-black"
        >
          <FontAwesomeIcon icon={icons.faUser} className={"pr-2"} />
          Players
        </Link>
        Descriptions for each player character and their abilities, traits, etc.
      </div>
      <div className="text-center w-1/5">
        <Link
          href={"/players/"}
          className="block p-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-white font-bold shadow hover:bg-parchment hover:text-black"
        >
          <FontAwesomeIcon icon={icons.faUsers} className={"pr-2"} />
          Non-player characters
        </Link>
        Descriptions for each non-player character and their abilities, traits,
        etc.
      </div>
      <div className="text-center w-1/5">
        <Link
          href={"/players/"}
          className="block p-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-white font-bold shadow hover:bg-parchment hover:text-black"
        >
          <FontAwesomeIcon icon={icons.faUser} className={"pr-2"} />
          Items
        </Link>
        Homebrew items i created myself or used from someone else.
      </div>
      <div className="text-center w-1/5">
        <Link
          href={"/players/"}
          className="block p-2 bg-dark-parchment w-fit mb-1 m-auto rounded-md text-white font-bold shadow hover:bg-parchment hover:text-black"
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
