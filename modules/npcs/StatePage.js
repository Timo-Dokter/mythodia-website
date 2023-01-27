import fs from "fs";
import path from "path";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";

import stringToTitle from "../../utils/stringToTitle.js";

import { TownSection } from "./components/TownSection.js";
import { StatesSection } from "./components/StatesSection";

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
    <>
      <h1 className="text-5xl">Non-player characters</h1>
      <div className="flex flex-col divide-y-4 divide-parchment gap-4">
        <StatesSection npcData={Object.entries(npcData)} />
      </div>
    </>
  );
};

export default StatePage;
