import UnorderedList from "./UnorderedList";

const InnateSpellsList = ({ spells }) => {
  return (
    <>
      {spells.at_will && (
        <div class="mt-1 ml-2">
          <h5 className="font-bold">At will</h5>
          <UnorderedList entries={spells.at_will} />
        </div>
      )}
      {spells.one_day_each && (
        <div class="mt-1 ml-2">
          <h5 className="font-bold">Once per day each</h5>
          <UnorderedList entries={spells.one_day_each} />
        </div>
      )}
      {spells.two_day_each && (
        <div class="mt-1 ml-2">
          <h5 className="font-bold">Twice per day each</h5>
          <UnorderedList entries={spells.two_day_each} />
        </div>
      )}
      {spells.three_day_each && (
        <div class="mt-1 ml-2">
          <h5 className="font-bold">Three times a day each</h5>
          <UnorderedList entries={spells.three_day_each} />
        </div>
      )}
    </>
  );
};

export default InnateSpellsList;
