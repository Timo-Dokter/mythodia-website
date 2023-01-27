import Link from "next/link";

export const NpcLinks = ({ npcs }) => {
  return (
    <>
      {npcs.map((npc) => (
        <li key={npc.name}>
          <Link
            href={npc.route}
            className="truncate text-blue-600 hover:underline hover:text-blue-400"
          >
            {npc.name}
          </Link>
        </li>
      ))}
    </>
  );
};
