import { useState } from "react";

import SideBarItem from "../../../../common/ui/sideBar/SideBarItem";
import SideBarListItem from "../../../../common/ui/sideBar/SideBarListItem";
import SideBarLinkListItem from "../../../../common/ui/sideBar/SideBarLinkListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StatusSection = ({ charInfo }) => {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <section className="flex flex-col divide-y divide-parchment">
      <div
        className="flex items-center px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words cursor-pointer select-none"
        onClick={() => {
          setShowStatus(!showStatus);
        }}
      >
        <p className="flex-1 leading-normal">Status</p>
        <FontAwesomeIcon
          className={`justify-end transition-all duration-300 ${
            showStatus ? "rotate-180" : "rotate-0"
          }`}
          icon={faChevronDown}
        />
      </div>
      {showStatus && (
        <>
          {charInfo.status && (
            <SideBarItem label={"Status"} value={charInfo.status} />
          )}
          {charInfo.cause_of_death && (
            <SideBarItem
              label={"Cause of death"}
              value={charInfo.cause_of_death}
            />
          )}
          {charInfo.curse && (
            <SideBarItem label={"Curse"} value={charInfo.curse} />
          )}
        </>
      )}
    </section>
  );
};

export default StatusSection;
