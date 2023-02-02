import ItemLinks from "./ItemLinks";

const ItemsByLetter = ({ itemsByLetter }) => {
  return itemsByLetter.map(([firstLetter, items]) => (
    <section
      className="flex flex-col mb-2 break-inside-avoid"
      key={firstLetter}
    >
      <h4 className="text-xl">{firstLetter}</h4>
      <ul className="list-inside list-disc">
        <ItemLinks items={items} />
      </ul>
    </section>
  ));
};

export default ItemsByLetter;
