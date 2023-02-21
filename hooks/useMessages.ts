import { useState } from "react";
import { useAxios } from "./useAxios"
import * as MessageType from "@/types/Message"

export const useMessages = () => {
  const { axios } = useAxios();
  const [ messages, setMessages ] = useState<MessageType.Message[]>([])

  const postMessage = async (m: MessageType.Message) => {
    try{
      const response = await axios.post<MessageType.Message>(
      "messages.json",
      JSON.stringify({ ...m })
    );
    console.log("posted successfully")
    } catch (e) {
      console.log("Error occurred", e);
      return;
    }

    setMessages((prev) => {
      prev.push(m)
      return prev;
    })
  }

  return { messages, postMessage }
}
