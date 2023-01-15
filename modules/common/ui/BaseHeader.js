import Image from "next/image";
import Link from "next/link";

const BaseHeader = () => {
  return (
    <header className="bg-dark-parchment flex flex-col md:flex-row justify-between">
      <Link href={"/"} className="flex pl-2 justify-center md:justify-start">
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
      <nav className="flex flex-col md:flex-row pr-2">
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
        {/* <Link
          href={"game"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
          passHref
          target={"_blank"}
        >
          Game
        </Link> */}
      </nav>
    </header>
  );
};

export default BaseHeader;
