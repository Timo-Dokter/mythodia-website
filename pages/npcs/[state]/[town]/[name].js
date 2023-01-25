import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

import getNpcInfo from "../../../../utils/getNpcInfo.js";

const Post = () => {
  const [npcInfo, setNpcInfo] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (
      router.query.hasOwnProperty("state") &&
      router.query.hasOwnProperty("town") &&
      router.query.hasOwnProperty("name")
    ) {
      const fetchInfo = async () => {
        const info = await getNpcInfo(router.query);
        console.log(info);
      };

      fetchInfo();
    }
  }, [router.query]);

  return <p>NPC</p>;
};

export default Post;
