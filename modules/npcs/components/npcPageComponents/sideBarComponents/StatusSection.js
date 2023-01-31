import { useState } from "react";

import SideBarItem from "./SideBarItem";
import SideBarListItem from "./SideBarListItem";
import SideBarLinkListItem from "./SideBarLinkListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StatusSection = ({ npc }) => {
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
          {npc.status && <SideBarItem label={"Status"} value={npc.status} />}
          {npc.cause_of_death && (
            <SideBarItem label={"Cause of death"} value={npc.cause_of_death} />
          )}
          {npc.curse && <SideBarItem label={"Curse"} value={npc.curse} />}
        </>
      )}
    </section>
  );
};

export default StatusSection;
