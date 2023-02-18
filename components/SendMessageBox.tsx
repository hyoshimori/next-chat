import React from 'react'
import styles from "./SendMessageBox.module.css"
import SailingIcon from '@mui/icons-material/Sailing';

import { Button, Input } from "@mui/material";

const SendMessageBox = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__send__message}>
          <input className={styles.body__send__message__input} type="text"/>
          <button className={styles.message__button}>< SailingIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageBox
