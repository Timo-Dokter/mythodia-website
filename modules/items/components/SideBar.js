import SideBarItem from "../../common/ui/sideBar/SideBarItem";
import SideBarListItem from "../../common/ui/sideBar/SideBarListItem";

import stringToTitle from "../../../utils/stringToTitle";

const SideBar = ({
  name,
  sideBarInfo,
  setShowImageModal,
  setModalImageSrc,
}) => {
  return (
    <aside className="flex flex-col border border-parchment divide-y divide-parchment float-right w-full max-w-xs bg-white ml-4">
      <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
        {stringToTitle(name)}
      </div>
      {sideBarInfo.image && (
        <div>
          <img
            src={sideBarInfo.image}
            alt="npc-image"
            onClick={(e) => {
              setShowImageModal(true);
              setModalImageSrc(sideBarInfo.image);
            }}
            className="cursor-pointer object-contain w-fit"
          />
        </div>
      )}
      {sideBarInfo.type && (
        <SideBarItem label={"Type"} value={sideBarInfo.type} />
      )}
      {sideBarInfo.materials && typeof sideBarInfo.materials == "string" ? (
        <SideBarItem label={"Material"} value={sideBarInfo.materials} />
      ) : (
        <SideBarListItem label={"Materials"} values={sideBarInfo.materials} />
      )}
      {sideBarInfo.rarity && (
        <SideBarItem label={"Rarity"} value={sideBarInfo.rarity} />
      )}
      {sideBarInfo.attunement && (
        <SideBarItem label={"Attunement"} value={sideBarInfo.attunement} />
      )}
      {sideBarInfo.properties && (
        <SideBarListItem label={"Properties"} values={sideBarInfo.properties} />
      )}
    </aside>
  );
};

export default SideBar;
