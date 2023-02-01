import Link from "next/link";

import stringToTitle from "../../../utils/stringToTitle";

const UnorderedList = ({ entries }) => {
  return (
    <ul className="ml-4 list-disc list-inside">
      {entries.map((entry, index) => (
        <li key={index}>
          {typeof entry == "object" ? (
            <Link
              href={entry.route}
              className="text-blue-600 hover:underline hover:text-blue-400"
            >
              {stringToTitle(entry.name)}
            </Link>
          ) : (
            stringToTitle(entry)
          )}
        </li>
      ))}
    </ul>
  );
};
export default UnorderedList;
