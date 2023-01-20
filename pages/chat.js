import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import { useRouter } from "next/router";

const Chat = ({ sender }) => {
  const router = useRouter();
  const pusher = new Pusher(process.env.PUSHER_PUBLIC_KEY, {
    cluster: process.env.PUSHER_CLUSTER,
  });

  const [chats, setChats] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    const channel = pusher.subscribe("chat");

    // updates chats
    channel.bind("chat-event", function (data) {
      setChats((prevState) => [
        ...prevState,
        { sender: data.sender, message: data.message },
      ]);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const handleSignOut = () => {
    pusher.unsubscribe("chat");
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/pusher", {
      message: messageToSend,
      sender,
    });
  };

  return <></>;
};

export default Chat;
