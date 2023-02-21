import React from 'react'
import styles from "./SendMessageBox.module.css"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

import { Button, Input } from "@mui/material";

const SendMessageBox = () => {
  const [message, setMessage] = useState<string | undefined>();

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMessage('');
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMessage('');
    }
  };

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__send__message}>
          <input className={styles.body__send__message__input} type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress}/>
          <button className={styles.message__button} onClick={onClickSend}>< SendIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageBox
