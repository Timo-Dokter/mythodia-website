import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import stringToTitle from "../../utils/stringToTitle.js";

import { TownSection } from "./components/TownSection.js";

const StatePage = () => {
  const [npcData, setNpcData] = useState([]);
  const [state, setState] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setState(router.query.state);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const getStateNpcs = async () => {
        await fetch(`/pages/npcs/${router.query.state}.json`)
          .then((res) => res.json())
          .then((data) => {
            let npcData = {};
            npcData[state] = {};

            Object.entries(data).forEach((entry, index) => {
              const key = entry[0];
              let value = {};

              entry[1]
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
                }, value);

              npcData[state][key] = value;
            });

            setNpcData(npcData);
          });
      };

      getStateNpcs();
    }
  }, [state]);

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
      </section>
      <section className="flex flex-col divide-y-4 divide-parchment gap-4">
        {Object.entries(npcData)
          .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
          .map(([state, towns]) => (
            <div key={state}>
              <TownSection towns={Object.entries(towns)} state={state} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default StatePage;
