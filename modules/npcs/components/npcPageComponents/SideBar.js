import CharacterInformationSection from "./sideBarComponents/CharacterInformationSection";
import SideBarItem from "./sideBarComponents/SideBarItem";
import StatsSection from "./sideBarComponents/StatsSection";
import StatusSection from "./sideBarComponents/StatusSection";

const SideBar = ({ charInfo, name, setShowImageModal, setModalImageSrc }) => {
  return (
    <aside className="flex flex-col border border-parchment divide-y divide-parchment float-right w-full max-w-xs bg-white ml-4">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        {name}
      </div>
      {charInfo.image && (
        <div>
          <img
            src={charInfo.image}
            alt="npc-image"
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(charInfo.image);
            }}
            className="cursor-pointer object-contain w-fit"
          />
        </div>
      )}
      {/* Type section */}
      {charInfo.type && <SideBarItem label={"Type"} value={charInfo.type} />}
      {/* Character info section */}
      <CharacterInformationSection charInfo={charInfo} name={name} />
      {/* Status section */}
      <StatusSection charInfo={charInfo} />
      {/* Stats section */}
      <StatsSection stats={charInfo.stats} />
    </aside>
  );
};

export default SideBar;
