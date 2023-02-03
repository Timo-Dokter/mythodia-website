import UnorderedList from "./UnorderedList";

const SpellsList = ({ spellsByLevel }) => {
  return (
    <>
      {spellsByLevel.cantrips && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Cantrips</h5>
          <UnorderedList entries={spellsByLevel.cantrips} />
        </div>
      )}
      {spellsByLevel.first_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">First level</h5>
          <UnorderedList entries={spellsByLevel.first_level} />
        </div>
      )}
      {spellsByLevel.second_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Second level</h5>
          <UnorderedList entries={spellsByLevel.second_level} />
        </div>
      )}
      {spellsByLevel.third_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Third level</h5>
          <UnorderedList entries={spellsByLevel.third_level} />
        </div>
      )}
      {spellsByLevel.fourth_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Fourth level</h5>
          <UnorderedList entries={spellsByLevel.fourth_level} />
        </div>
      )}
      {spellsByLevel.fifth_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Fifth level</h5>
          <UnorderedList entries={spellsByLevel.fifth_level} />
        </div>
      )}
      {spellsByLevel.sixth_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Sixth level</h5>
          <UnorderedList entries={spellsByLevel.sixth_level} />
        </div>
      )}
      {spellsByLevel.seventh_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Seventh level</h5>
          <UnorderedList entries={spellsByLevel.seventh_level} />
        </div>
      )}
      {spellsByLevel.eigth_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Eigth level</h5>
          <UnorderedList entries={spellsByLevel.eigth_level} />
        </div>
      )}
      {spellsByLevel.ninth_level && (
        <div className="mt-1 ml-2">
          <h5 className="font-bold">Ninth level</h5>
          <UnorderedList entries={spellsByLevel.ninth_level} />
        </div>
      )}
    </>
  );
};

export default SpellsList;
