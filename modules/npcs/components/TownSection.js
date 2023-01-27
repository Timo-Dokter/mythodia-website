import Link from "next/link";

import { NpcsByLetterSection } from "./NpcsByLetterSection";

import stringToTitle from "../../../utils/stringToTitle";

export const TownSection = ({ towns, state }) => {
  return (
    <div className="flex flex-col divide-y-2 divide-parchment">
      {towns.map(([town, npcsByLetter]) => (
        <div key={town}>
          <Link
            href={`/npcs/${state}/${town}`}
            className="text-2xl text-black hover:underline hover:text-gray-500"
          >
            {stringToTitle(town)}
          </Link>
          <NpcsByLetterSection npcsByLetter={npcsByLetter} />
        </div>
      ))}
    </div>
  );
};
