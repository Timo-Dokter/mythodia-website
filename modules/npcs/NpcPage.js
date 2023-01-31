import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import SideBarItem from "./components/sideBarComponents/SideBarItem";
import CharacterInformationSection from "./components/sideBarComponents/CharacterInformationSection";
import StatusSection from "./components/sideBarComponents/StatusSection";
import StatsSection from "./components/sideBarComponents/StatsSection";

const NpcPage = ({ setShowImageModal, setModalImageSrc }) => {
  const [npcData, setNpcData] = useState({});
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;
      setState(query.state);
      setTown(query.town);
      setName(query.name);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady && state && town && name) {
      const getNpcData = async () => {
        await fetch(`/pages/npcs/${state}.json`)
          .then((res) => res.json())
          .then((data) => {
            setNpcData(data[town].find((npc) => npc["look-up_name"] == name));
          });
      };

      getNpcData();
    }
  }, [state, town, name]);

  return (
    <div className="flow-root">
      <aside className="flex flex-col border border-parchment divide-y divide-parchment float-right w-full max-w-xs bg-white">
        <div className="px-2 py-3 text-center text-xl font-bold bg-dark-parchment break-words">
          {npcData.name}
        </div>
        {npcData.image && (
          <div>
            <img
              src={npcData.image}
              alt="npc-image"
              onClick={(e) => {
                setShowImageModal(true);
                setModalImageSrc(npcData.image);
              }}
              className="cursor-pointer object-contain w-fit"
            />
          </div>
        )}
        {/* Type section */}
        {npcData.type && <SideBarItem label={"Type"} value={npcData.type} />}
        {/* Character info section */}
        <CharacterInformationSection npc={npcData} />
        {/* Status section */}
        <StatusSection npc={npcData} />
        {/* Stats section */}
        <StatsSection stats={npcData.stats} />
      </aside>
      <h1 className="text-4xl">{npcData.name}</h1>
    </div>
  );
};

export default NpcPage;
