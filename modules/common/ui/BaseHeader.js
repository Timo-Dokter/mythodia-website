import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Fade as Hamburger } from "hamburger-react";

const BaseHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-parchment">
      <nav className="flex flex-row justify-between items-center px-2">
        <Link href={"/"} className="flex relative justify-start z-30">
          <Image
            src="/images/DnD-Symbol.png"
            alt="dnd symbol"
            width={120}
            height={67.5}
          />
          <h1 className="pl-2 text-4xl font-semibold flex items-center text-black">
            Mythodia
          </h1>
        </Link>

        <div className="z-20 md:hidden">
          <div
            className={`flex flex-col gap-y-1 top-0 right-0 w-full h-full bg-dark-parchment p-2 pt-16 text-white fixed  ease-in-out duration-300 ${
              mobileMenuOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <Link
              href={"/"}
              className="flex items-center text-xl font-semibold text-black hover:bg-light-brown hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              href={"/players/"}
              className="flex items-center text-xl font-semibold text-black hover:bg-light-brown hover:text-white transition-all"
            >
              Players
            </Link>
            <Link
              href={"/npcs/"}
              className="flex items-center text-xl font-semibold text-black hover:bg-light-brown hover:text-white transition-all"
            >
              Non-player characters
            </Link>
            <Link
              href={"/items/"}
              className="flex items-center text-xl font-semibold text-black hover:bg-light-brown hover:text-white transition-all"
            >
              Items
            </Link>
            <Link
              href={"/world/"}
              className="flex items-center text-xl font-semibold text-black hover:bg-light-brown hover:text-white transition-all"
            >
              World
            </Link>
          </div>
          <div className="">
            <Hamburger onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </div>

        <div className="hidden md:flex">
          {/* <Link
          href={"game"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
          passHref
          target={"_blank"}
        >
          Game
        </Link> */}

          <Link
            href={"/"}
            className="flex items-center text-xl font-semibold px-2 text-black hover:bg-light-brown hover:text-white transition-all"
          >
            Home
          </Link>
          <Link
            href={"/players/"}
            className="flex items-center text-xl font-semibold px-2 text-black hover:bg-light-brown hover:text-white transition-all"
          >
            Players
          </Link>
          <Link
            href={"/npcs/"}
            className="flex items-center text-xl font-semibold px-2 text-black hover:bg-light-brown hover:text-white transition-all"
          >
            Non-player characters
          </Link>
          <Link
            href={"/items/"}
            className="flex items-center text-xl font-semibold px-2 text-black hover:bg-light-brown hover:text-white transition-all"
          >
            Items
          </Link>
          <Link
            href={"/world/"}
            className="flex items-center text-xl font-semibold px-2 text-black hover:bg-light-brown hover:text-white transition-all"
          >
            World
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default BaseHeader;
