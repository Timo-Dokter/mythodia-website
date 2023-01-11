import Image from "next/image";
import Link from "next/link";

const BaseHeader = () => {
  return (
    <header className="bg-dark-parchment flex justify-between">
      <Link href={"/"} className="flex pl-2">
        <Image
          src="/images/DnD-Symbol.png"
          alt="dnd symbol"
          width={120}
          height={67.5}
        />
        <h1 className="pl-2 text-4xl font-semibold flex items-center text-white">
          Mythodia
        </h1>
      </Link>
      <nav className="flex pr-2">
        <Link
          href={"/"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
        >
          Home
        </Link>
        <Link
          href={"/players/"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
        >
          Players
        </Link>
        <Link
          href={"/npcs/"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
        >
          Non-player characters
        </Link>
        <Link
          href={"/items/"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
        >
          Items
        </Link>
        <Link
          href={"/world/"}
          className="flex items-center text-xl font-semibold px-2 text-white hover:bg-parchment hover:text-black transition-all"
        >
          World
        </Link>
      </nav>
    </header>
  );
};

export default BaseHeader;
