import GameLoginPage from "../game/GameLoginPage";

const GamePage = ({ role, selectRole }) => {
  if (role === "") {
    return <GameLoginPage selectRole={selectRole} />;
  }

  return <>{role}</>;
};

export default GamePage;
