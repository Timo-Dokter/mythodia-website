import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import SideBarItem from "./components/npcPageComponents/sideBarComponents/SideBarItem";
import CharacterInformationSection from "./components/npcPageComponents/sideBarComponents/CharacterInformationSection";
import StatusSection from "./components/npcPageComponents/sideBarComponents/StatusSection";
import StatsSection from "./components/npcPageComponents/sideBarComponents/StatsSection";

import SideBar from "./components/npcPageComponents/SideBar";

const NpcPage = ({ setShowImageModal, setModalImageSrc }) => {
  const [npc, setNpc] = useState({});
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
      const getNpc = async () => {
        await fetch(`/pages/npcs/${state}.json`)
          .then((res) => res.json())
          .then((data) => {
            setNpc(data[town].find((npc) => npc["look-up_name"] == name));
          });
      };

      getNpc();
    }
  }, [state, town, name]);

  return (
    <>
      <h1 className="text-4xl">{npc.name}</h1>
      <div className="flow-root mt-4">
        {npc && <SideBar npc={npc} />}
        {npc.short_description && <div>{npc.short_description}</div>}
      </div>
    </>
  );
};

export default NpcPage;
