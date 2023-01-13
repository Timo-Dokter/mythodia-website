import { useEffect, useState } from "react";

import io from "socket.io-client";

const GamePage = () => {
  const [socket, setSocket] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    const socketInitializer = async () => {
      let tempSocket;

      await fetch("/api/socket");
      tempSocket = io();

      tempSocket.on("connect", () => {
        console.log("connected");
      });

      tempSocket.on("update-input", (msg) => {
        console.log("update-input");
        setInput(msg);
      });

      setSocket(tempSocket);
    };

    socketInitializer().catch((err) => {
      console.error(err);
    });
  }, []);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    socket.emit("input-change", e.target.value);
  };

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  );
};

export default GamePage;
