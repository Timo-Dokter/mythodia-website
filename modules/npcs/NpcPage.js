import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import SideBar from "./components/npcPageComponents/SideBar";
import UnorderedList from "../common/ui/UnorderedList";

import stringToTitle from "../../utils/stringToTitle";
import SpellsList from "../common/ui/SpellsList";
import InnateSpellsList from "../common/ui/InnateSpellsList";

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
      <h1 className="text-4xl font-light">{npc.name}</h1>
      <div className="flow-root mt-4">
        {npc.side_bar_character_info && (
          <SideBar
            charInfo={npc.side_bar_character_info}
            name={npc.name}
            setShowImageModal={setShowImageModal}
            setModalImageSrc={setModalImageSrc}
          />
        )}
        {npc.short_description && <div>{npc.short_description}</div>}
        {npc.description && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Description
            </h2>
            {Object.entries(npc.description).map(([title, text], index) => (
              <div className="mb-2" key={index}>
                <h3 className="text-xl capitalize font-bold">{title}</h3>
                {typeof text == "object" ? (
                  text.map((paragraph, index) => (
                    <p className="mt-2" key={index}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="mt-2">{text}</p>
                )}
              </div>
            ))}
          </section>
        )}
        {npc.background && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Background
            </h2>
            {typeof npc.background == "array" ? (
              text.map((paragraph, index) => (
                <p className="mt-2" key={index}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-2">{text}</p>
            )}
          </section>
        )}
        {npc.relationships && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Relationships
            </h2>
            {npc.relationships.map((relation, index) => (
              <div className="mb-2" key={index}>
                <h3 className="text-xl capitalize font-bold">
                  {relation.route ? (
                    <Link
                      href={relation.route}
                      className="text-blue-600 hover:underline hover:text-blue-400"
                    >
                      {relation.name}
                    </Link>
                  ) : (
                    relation.name
                  )}
                </h3>
                {typeof relation.description == "object" ? (
                  relation.description.map((paragraph, index) => (
                    <p className="mt-2" key={index}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="mt-2">{relation.description}</p>
                )}
              </div>
            ))}
          </section>
        )}
        {npc.character_info && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Character information
            </h2>
            {npc.character_info.notable_items && (
              <section className="mb-2">
                <h3 className="text-xl capitalize font-bold">Notable items</h3>
                {Object.entries(npc.character_info.notable_items).map(
                  ([title, items], index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold">
                        {stringToTitle(title)}
                      </h4>
                      <UnorderedList entries={items} />
                    </div>
                  )
                )}
              </section>
            )}

            {npc.character_info.abilities && (
              <section className="mb-2">
                <h3 className="text-xl capitalize font-bold">Abilities</h3>
                {npc.character_info.abilities.class_features && (
                  <div className="mt-1">
                    <h4 className="text-lg font-semibold">
                      {stringToTitle(npc.class)} features
                    </h4>
                    <UnorderedList
                      entries={npc.character_info.abilities.class_features}
                    />
                  </div>
                )}
                {npc.character_info.abilities.sub_class_features && (
                  <div className="mt-1">
                    <h4 className="text-lg font-semibold">
                      {stringToTitle(npc.sub_class)} features
                    </h4>
                    <UnorderedList
                      entries={npc.character_info.abilities.sub_class_features}
                    />
                  </div>
                )}
                {npc.character_info.abilities.spells && (
                  <div className="mt-1">
                    <h4 className="text-lg font-semibold">
                      {stringToTitle(npc.class)} spells
                    </h4>
                    <SpellsList
                      spellsByLevel={npc.character_info.abilities.spells}
                    />
                  </div>
                )}
                {npc.character_info.abilities.other_abilities && (
                  <>
                    {Object.entries(
                      npc.character_info.abilities.other_abilities
                    ).map(([key, description], index) => (
                      <div className="mt-1" key={index}>
                        <h4 className="text-lg font-semibold">
                          {stringToTitle(key)}
                        </h4>
                        <p className="mt-2">{description}</p>
                      </div>
                    ))}
                  </>
                )}
                {npc.character_info.abilities.innate_spells && (
                  <div className="mt-1">
                    <h4 className="text-lg font-semibold">
                      Innate spellcasting
                    </h4>
                    <InnateSpellsList
                      spells={npc.character_info.abilities.innate_spells}
                    />
                  </div>
                )}
              </section>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default NpcPage;
