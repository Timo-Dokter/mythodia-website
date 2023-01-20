import { useState } from "react";

import GameLayout from "../common/layouts/GameLayout";
import LoginModal from "./ui/LoginModal";

const GameLoginPage = ({ selectRole }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="flex m-auto items-center justify-center gap-2 h-screen bg-black">
        <button
          className="flex items-center text-xl font-semibold px-4 py-2 rounded text-black bg-dark-parchment hover:bg-light-brown hover:text-white transition-all"
          onClick={() => setShowLoginModal(true)}
        >
          DM
        </button>
        <button
          className="flex items-center text-xl font-semibold px-4 py-2 rounded text-black bg-dark-parchment hover:bg-light-brown hover:text-white transition-all"
          value={"player"}
          onClick={(e) => selectRole(e, e.target.value)}
        >
          Player
        </button>
      </div>
      <LoginModal
        show={showLoginModal}
        setShow={setShowLoginModal}
        selectRole={selectRole}
      />
    </>
  );
};

GameLoginPage.Layout = GameLayout;

export default GameLoginPage;
