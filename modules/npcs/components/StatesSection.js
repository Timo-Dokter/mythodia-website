import Link from "next/link";

import { TownSection } from "./TownSection";

import stringToTitle from "../../../utils/stringToTitle";

export const StatesSection = ({ npcData }) => {
  return (
    <>
      {npcData
        .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
        .map(([state, towns]) => (
          <div key={state}>
            <Link
              href={`/npcs/${state}`}
              className="text-3xl text-black hover:underline hover:text-gray-500"
            >
              {stringToTitle(state)}
            </Link>
            <TownSection towns={Object.entries(towns)} state={state} />
          </div>
        ))}
    </>
  );
};
