import { useState, useEffect } from "react";
import { useAxios } from "./useAxios"
import * as MessageType from "@/types/Message"
import useInterval from "./useInterval";

export const useMessages = () => {
  const { axios } = useAxios();
  // MessageType can be any name
  const [ messages, setMessages ] = useState<MessageType.Message[]>([])

  const fetchMessages = async () => {
    const response = await axios.get<MessageType.Message[]>("messages.json");
    // Object.values() is a built-in JavaScript method that returns an array
    // An arrow function that returns the element el if it is truthy
    // By doing this, we may avoid possible errors
    const data = Object.values(response.data).filter((el) => el)
    setMessages(data)
  };

  useInterval(() => {
    fetchMessages();
  }, 1000000000)

  let messagesCount = messages.length;


  // Add WebSocket

  // useEffect(() => {
  //   const socket = new WebSocket("wss://next-chat-d1541-default-rtdb.europe-west1.firebasedatabase.app/.ws?v=5");
  //   socket.addEventListener("message", event => {
  //     console.log('Received message:', event.data);
  //     const newMessage = JSON.parse(event.data);
  //     setMessages(prevMessages => [...prevMessages, newMessage]);
  //   });
  //   return () => socket.close();
  // }, []);


  // Applying Type from Message.ts
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
      // keep the immutability in the state
      return [...prev, m];
    })
  }

  return { fetchMessages, messages, postMessage, messagesCount }
}
