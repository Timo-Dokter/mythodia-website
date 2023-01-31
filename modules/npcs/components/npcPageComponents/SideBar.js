import CharacterInformationSection from "./sideBarComponents/CharacterInformationSection";
import SideBarItem from "./sideBarComponents/SideBarItem";
import StatsSection from "./sideBarComponents/StatsSection";
import StatusSection from "./sideBarComponents/StatusSection";

const SideBar = ({ npc }) => {
  return (
    <aside className="flex flex-col border border-parchment divide-y divide-parchment float-right w-full max-w-xs bg-white">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        {npc.name}
      </div>
      {npc.image && (
        <div>
          <img
            src={npc.image}
            alt="npc-image"
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(npc.image);
            }}
            className="cursor-pointer object-contain w-fit"
          />
        </div>
      )}
      {/* Type section */}
      {npc.type && <SideBarItem label={"Type"} value={npc.type} />}
      {/* Character info section */}
      <CharacterInformationSection npc={npc} />
      {/* Status section */}
      <StatusSection npc={npc} />
      {/* Stats section */}
      <StatsSection stats={npc.stats} />
    </aside>
  );
};

export default SideBar;
