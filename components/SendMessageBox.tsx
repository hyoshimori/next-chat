import React from 'react'
import styles from "./SendMessageBox.module.css"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useMessages } from "@/hooks/useMessages";

// import { Button, Input } from "@mui/material";


const SendMessageBox = () => {
  const [message, setMessage] = useState('');
  const { postMessage } = useMessages();


  // web socket
  // const createNewMessage = (text: string) => {
  //   const newMessage = {
  //     id: "Me",
  //     body: text,
  //     channelId: Date.now()
  //   };
  //   return newMessage;
  // };

  const generateRandomString = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 25; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  };

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const date = new Date()
    const requestMessage = {
      id: generateRandomString().toString(),
      body: message,
      channelId: "0",
      createdAt: date.toString(),
    }

    postMessage(requestMessage)
    setMessage('');
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // postMessage(message)
      const date = new Date()
      const requestMessage = {
        id: generateRandomString().toString(),
        body: message,
        channelId: "0",
        createdAt: date.toString(),
      }

      postMessage(requestMessage)
      setMessage('');
    }
  };

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__send__message}>
          <input className={styles.body__send__message__input} type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress}/>
          <button className={styles.message__button} onClick={onClickSend} value={message}>< SendIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageBox
