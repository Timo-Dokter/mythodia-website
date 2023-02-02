import SideBarItem from "./SideBarItem";
import SideBarListItem from "./SideBarListItem";
import SideBarLinkListItem from "./SideBarLinkListItem";

const CharacterInformationSection = ({ charInfo, name }) => {
  return (
    <section className="flex flex-col divide-y divide-parchment">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        Character information
      </div>
      {/* Name */}
      <SideBarItem label={"Name"} value={name} />
      {/* Also known as */}
      {charInfo.also_known_as && (
        <SideBarListItem
          label="Also known as"
          values={charInfo.also_known_as}
        />
      )}
      {/* Creature type */}
      {charInfo.creature_type && (
        <SideBarItem label={"Creature type"} value={charInfo.creature_type} />
      )}
      {/* Race */}
      {charInfo.race && <SideBarItem label={"Race"} value={charInfo.race} />}
      {/* Age */}
      {charInfo.age && <SideBarItem label={"Age"} value={charInfo.age} />}
      {/* Languages */}
      {charInfo.languages && (
        <SideBarListItem label={"Languages"} values={charInfo.languages} />
      )}
      {/* Places */}
      {charInfo.place && <SideBarItem label={"Place"} value={charInfo.place} />}
      {/* Family */}
      {charInfo.family && (
        <SideBarLinkListItem label={"Family"} values={charInfo.family} />
      )}
      {/* Connections */}
      {charInfo.connections && (
        <SideBarLinkListItem
          label={"Connections"}
          values={charInfo.connections}
        />
      )}
    </section>
  );
};

export default CharacterInformationSection;
