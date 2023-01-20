import { useState } from "react";
import LoginModal from "./ui/LoginModal";

const GameLoginPage = ({ selectRole }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <div className="flex m-auto items-center justify-center flex-col h-screen bg-purple-500">
        <div className="mb-5">
          <button
            className="p-2 bg-gray-600 m-1"
            onClick={() => setShowLoginModal(true)}
          >
            DM
          </button>
          <button
            className="p-2 bg-gray-600 m-1"
            value={"player"}
            onClick={(e) => selectRole(e, e.target.value)}
          >
            Player
          </button>
        </div>
      </div>
      <LoginModal
        show={showLoginModal}
        setShow={setShowLoginModal}
        selectRole={selectRole}
      />
    </>
  );
};

export default GameLoginPage;
