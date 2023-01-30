import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import stringToTitle from "../../utils/stringToTitle.js";

import { NpcsByLetterSection } from "./components/NpcsByLetterSection";

const TownPage = () => {
  const [townData, setTownData] = useState([]);
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setState(router.query.state);
      setTown(router.query.town);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady && state != "" && town != "") {
      const getTownNpcs = async () => {
        await fetch(`/pages/npcs/${state}.json`)
          .then((res) => res.json())
          .then((data) => {
            let npcData = {};
            npcData[state] = {};
            npcData[state][town] = {};

            let tempValue = {};

            data[town]
              .sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase()
                  ? 1
                  : b.name.toLowerCase() > a.name.toLowerCase()
                  ? -1
                  : 0
              )
              .reduce((acc, curr) => {
                let firstLetter = curr.name[0].toUpperCase();
                if (!acc[firstLetter]) {
                  acc[firstLetter] = [];
                }
                acc[firstLetter].push(curr);
                return acc;
              }, tempValue);

            npcData[state][town] = tempValue;
            setTownData(npcData);
          });
      };

      getTownNpcs();
    }
  }, [state, town]);

  return (
    <div className="flex flex-col divide-y-4 divide-parchment gap-2">
      <section className="text-4xl flex flex-col gap-2">
        <Link
          href={`/npcs`}
          className="text-black hover:underline hover:text-gray-500 w-fit"
        >
          Non-player characters
        </Link>
        {state && (
          <Link
            href={`/npcs/${state}`}
            className="text-black hover:underline hover:text-gray-500 ml-4 w-fit"
          >
            - {stringToTitle(state)}
          </Link>
        )}
        {town && (
          <Link
            href={`/npcs/${state}/${town}`}
            className="text-black hover:underline hover:text-gray-500 ml-8 w-fit"
          >
            - {stringToTitle(town)}
          </Link>
        )}
      </section>
      <section className="flex flex-col divide-y-4 divide-parchment gap-4">
        {Object.entries(townData)
          .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
          .map(([state, towns]) => (
            <div
              className="flex flex-col divide-y-2 divide-parchment"
              key={state}
            >
              {Object.entries(towns).map(([town, npcsByLetter]) => (
                <div key={town}>
                  <NpcsByLetterSection npcsByLetter={npcsByLetter} />
                </div>
              ))}

              {/* <div key={state}>
              <TownSection towns={Object.entries(towns)} state={state} />
              </div> */}
            </div>
          ))}
      </section>
    </div>
  );
};

export default TownPage;
