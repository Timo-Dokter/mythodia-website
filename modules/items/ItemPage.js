import { useState, useEffect, use } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import SideBar from "./components/SideBar";

import stringToTitle from "../../utils/stringToTitle";

const ItemPage = ({ setShowImageModal, setModalImageSrc }) => {
  const [type, setType] = useState("");
  const [itemName, setItemName] = useState("");
  const [item, setItem] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setType(router.query.itemType);
      setItemName(router.query.item);
    }
  }, [router]);

  useEffect(() => {
    if (router.isReady && type != "" && item != {}) {
      const getItem = async () => {
        await fetch(`/pages/items/${type}.json`)
          .then((res) => res.json())
          .then((data) => {
            setItem(data.find((item) => item["look-up_name"] == itemName));
          });
      };

      getItem();
    }
  }, [type]);

  return (
    <>
      <h1 className="text-4xl font-light">{stringToTitle(itemName)}</h1>
      <div className="flow-root mt-4">
        {item.side_bar_info && (
          <SideBar
            name={itemName}
            sideBarInfo={item.side_bar_info}
            setShowImageModal={setShowImageModal}
            setModalImageSrc={setModalImageSrc}
          />
        )}
        {item.short_description && <div>{item.short_description}</div>}
        {item.appearance && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Appearance
            </h2>
            {typeof item.appearance == "object" ? (
              text.map((paragraph, index) => (
                <p className="mt-2" key={index}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-2">{item.appearance}</p>
            )}
          </section>
        )}
        {item.features && (
          <section className="mb-4">
            <h2 className="text-2xl font-bold border-b border-parchment overflow-hidden mb-2">
              Features
            </h2>
            <ul className="list-disc ml-4">
              {item.features.map((feature, index) => (
                <li className="" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
};

export default ItemPage;
