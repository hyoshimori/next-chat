import { useAxios } from "./useAxios"
import { useEffect, useState } from "react"
import { Channel } from "@/types/Channel";

export const useChannels = () => {
  const { axios } = useAxios();
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const response = await axios.get("/channels.json");
      const data = Object.values(response.data).filter((el) => el);
      setChannels(data);
    };
    fetchChannels();
  }, [axios]);

  useEffect(() => {
    const socket = new WebSocket("wss://next-chat-d1541-default-rtdb.europe-west1.firebasedatabase.app/.ws?v=5");
    socket.addEventListener("message", event => {
      const newChannel = JSON.parse(event.data);
      setChannels(prevChannels => [...prevChannels, newChannel]);
    });
    return () => socket.close();
  }, []);

  return { channels };
};
