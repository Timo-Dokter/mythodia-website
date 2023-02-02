import Link from "next/link";

import stringToTitle from "../../../utils/stringToTitle";
import ItemsByLetter from "./ItemsByLetter";

const ItemsByType = ({ itemTypes }) => {
  return (
    <>
      {itemTypes
        .sort((a, b) => (a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0))
        .map(([itemType, itemsByLetter]) => (
          <div key={itemType}>
            <Link
              href={`/items/${itemType}`}
              className="text-3xl text-black hover:underline hover:text-gray-500"
            >
              {stringToTitle(itemType)}
            </Link>
            <div className="columns-3">
              <ItemsByLetter itemsByLetter={Object.entries(itemsByLetter)} />
            </div>
          </div>
        ))}
    </>
  );
};

export default ItemsByType;
