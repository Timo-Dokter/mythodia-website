import SideBarItem from "./SideBarItem";
import SideBarListItem from "./SideBarListItem";
import SideBarLinkListItem from "./SideBarLinkListItem";

const CharacterInformationSection = ({ npc }) => {
  return (
    <section className="flex flex-col divide-y divide-parchment">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        Character information
      </div>
      {/* Name */}
      <SideBarItem label={"Name"} value={npc.name} />
      {/* Also known as */}
      {npc.also_known_as && (
        <SideBarListItem label="Also known as" values={npc.also_known_as} />
      )}
      {/* Creature type */}
      {npc.creature_type && (
        <SideBarItem label={"Creature type"} value={npc.creature_type} />
      )}
      {/* Race */}
      {npc.race && <SideBarItem label={"Race"} value={npc.race} />}
      {/* Age */}
      {npc.age && <SideBarItem label={"Age"} value={npc.age} />}
      {/* Languages */}
      {npc.languages && (
        <SideBarListItem label={"Languages"} values={npc.languages} />
      )}
      {/* Places */}
      {npc.place && <SideBarItem label={"Place"} value={npc.place} />}
      {/* Family */}
      {npc.family && (
        <SideBarLinkListItem label={"Family"} values={npc.family} />
      )}
      {/* Connections */}
      {npc.connections && (
        <SideBarLinkListItem label={"Connections"} values={npc.connections} />
      )}
    </section>
  );
};

export default CharacterInformationSection;
