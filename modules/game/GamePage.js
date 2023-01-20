import GameLoginPage from "../game/GameLoginPage";

import GameLayout from "../common/layouts/GameLayout";

const GamePage = ({ role, selectRole }) => {
  if (role === "") {
    return <GameLoginPage selectRole={selectRole} />;
  }

  return <>{role}</>;
};

GamePage.Layout = GameLayout;

export default GamePage;
