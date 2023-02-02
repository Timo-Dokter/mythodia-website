import fs from "fs";
import path from "path";

import { useState, useEffect } from "react";

import ItemsByType from "./components/ItemsByType";

const ItemsPage = ({ staticItems }) => {
  const [itemTypes, setItemTypes] = useState({});

  useEffect(() => {
    if (staticItems != {}) {
      setItemTypes(staticItems);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col divide-y-4 divide-parchment gap-2">
        <h1 className="text-4xl">Items</h1>
        <section className="flex flex-col divide-y-4 divide-parchment gap-4">
          <ItemsByType itemTypes={Object.entries(itemTypes)} />
        </section>
      </div>
    </>
  );
};

export default ItemsPage;

export async function getStaticProps() {
  let items = {};

  const directory = path.join(process.cwd(), "public/pages/items");
  fs.readdirSync(directory).forEach((name) => {
    const filePath = path.join(directory, name);

    if (name.endsWith(".json")) {
      const itemType = name.replace(".json", "");
      items[itemType] = {};

      const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

      json
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
        }, items[itemType]);
    }
  });

  return {
    props: {
      staticItems: items,
    },
  };
}
