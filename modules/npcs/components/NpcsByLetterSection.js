import { NpcLinks } from "./NpcLinks";

export const NpcsByLetterSection = ({ npcsByLetter }) => {
  return (
    <div className="columns-3">
      {Object.entries(npcsByLetter).map(([firstLetter, npcs]) => (
        <section className="flex flex-col mb-2" key={firstLetter}>
          <h4 className="text-xl">{firstLetter}</h4>
          <ul className="list-inside list-disc">
            <NpcLinks npcs={npcs} />
          </ul>
        </section>
      ))}
    </div>
  );
};
