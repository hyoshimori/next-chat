import React from 'react'
import styles from "./SendMessageBox.module.css"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useMessages } from "@/hooks/useMessages";

// import { Button, Input } from "@mui/material";

const SendMessageBox = () => {
  const [message, setMessage] = useState<string | undefined>();
  const { postMessage } = useMessages();

  const createNewMessage = (text: string) => {
    const newMessage = {
      id: "Me",
      body: text,
      channelId: Date.now()
    };
    return newMessage;
  };

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const requestMessage = {
      id: "testing",
      body: e.target.value,
      channelId: "1"
    }

    postMessage(requestMessage)
    setMessage('');
  }

  // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     // postMessage(message)
  //     const requestMessage = {
  //       id: "testing",
  //       body: e.target.value,
  //       channelId: "1"
  //     }

  //     postMessage(requestMessage)
  //     setMessage('');
  //   }
  // };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (message) {
        const newMessage = createNewMessage(message);
        postMessage(newMessage);
        setMessage('');
      }
    }
  };

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__send__message}>
          <input
            className={styles.body__send__message__input}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className={styles.message__button} onClick={onClickSend}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessageBox
