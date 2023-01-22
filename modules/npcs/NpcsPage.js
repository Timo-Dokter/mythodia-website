import fs from "fs";
import path from "path";

import Link from "next/link";

import { useState, useEffect } from "react";

const NpcsPage = (props) => {
  const [npcData, setNpcData] = useState({});

  useEffect(() => {
    setNpcData(props.npcData);
  }, [props.npcData]);

  return (
    <>
      <h1 className="text-5xl">NPC's</h1>
      <div className="flex">
        {Object.entries(npcData).map(([key, value]) => (
          <>
            <h3 className="text-2xl">{key}</h3>
            {value.map((npc) => (
              <Link href={npc.route} key={npc.name} className="">
                {npc.name}
              </Link>
            ))}
          </>
        ))}
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
      const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

      Object.entries(json).forEach((entry, index) => {
        npcData[entry[0]] = entry[1];
      });
    }
  });

  return {
    props: {
      npcData: npcData,
    },
  };
}
