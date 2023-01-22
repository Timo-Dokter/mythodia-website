const GetNpcInfo = async (data) => {
  const { state, town, name } = data;
  const jsonFile = await require(`../public/pages/npcs/${state}.json`);
  return jsonFile[town].find((npc) => npc.name === name);
};

export default GetNpcInfo;
