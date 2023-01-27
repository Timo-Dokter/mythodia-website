import fs from "fs";
import path from "path";

import Link from "next/link";

import { useState, useEffect } from "react";

import stringToTitle from "../../utils/stringToTitle";

import { NpcLinks } from "./components/npcLinks";
import { NpcsByLetterSection } from "./components/NpcsByLetterSection";
import { TownSection } from "./components/TownSection";
import { StatesSection } from "./components/StatesSection";

const NpcsPage = (props) => {
  const [npcData, setNpcData] = useState([]);

  useEffect(() => {
    setNpcData(props.npcData);
  }, [props.npcData]);

  return (
    <>
      <h1 className="text-5xl">Non-player characters</h1>
      <div className="flex flex-col divide-y-4 divide-parchment gap-4">
        <StatesSection npcData={Object.entries(npcData)} />
        {/* {Object.entries(npcData)
          .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
          .map(([state, towns]) => (
            <div key={state}>
              <h3 className="text-3xl">{stringToTitle(state)}</h3>
              <TownSection towns={Object.entries(towns)} state={state} />
            </div>
          ))} */}
      </div>
    </>
  );
};

export default NpcsPage;

export async function getStaticProps() {
  let npcData = {};

  const directory = path.join(process.cwd(), "public/pages/npcs");
  fs.readdirSync(directory).forEach((name) => {
    const filePath = path.join(directory, name);

    if (fs.lstatSync(filePath).isDirectory()) {
      // this can be used to resolve directories
    } else if (name.endsWith(".json")) {
      const stateName = name.replace(".json", "");
      npcData[stateName] = {};

      const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

      Object.entries(json).forEach((entry, index) => {
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

        npcData[stateName][key] = value;
      });
    }
  });

  return {
    props: {
      npcData: npcData,
    },
  };
}
