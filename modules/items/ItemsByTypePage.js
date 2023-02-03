import { useState, useEffect, use } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import ItemsByLetter from "./components/ItemsByLetter";

import stringToTitle from "../../utils/stringToTitle";

const ItemsByTypePage = () => {
  const [type, setType] = useState("");
  const [items, setItems] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setType(router.query.itemType);
    }
  }, [router]);

  useEffect(() => {
    if (router.isReady && type != "") {
      const getItemsByType = async () => {
        await fetch(`/pages/items/${type}.json`)
          .then((res) => res.json())
          .then((data) => {
            let itemsData = {};
            data
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
              }, itemsData);
            setItems(itemsData);
          });
      };

      getItemsByType();
    }
  }, [type]);

  return (
    <div className="flex flex-col divide-y-4 divide-parchment gap-2">
      <section className="text-4xl flex flex-col gap-2">
        <h1 className="text-4xl">
          <Link
            href={"/items"}
            className="text-black hover:underline hover:text-gray-500 w-fit"
          >
            Items
          </Link>
        </h1>
        {type && (
          <h1 className="text-4xl">
            <Link
              href={`/items/${type}`}
              className="text-black hover:underline hover:text-gray-500 ml-4 w-fit"
            >
              - {stringToTitle(type)}
            </Link>
          </h1>
        )}
      </section>
      <section className="flex flex-col divide-y-4 divide-parchment gap-4">
        {items && <ItemsByLetter itemsByLetter={Object.entries(items)} />}
      </section>
    </div>
  );
};

export default ItemsByTypePage;
