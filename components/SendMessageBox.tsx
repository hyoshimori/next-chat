import React from 'react'
import styles from "./SendMessageBox.module.css"
import SailingIcon from '@mui/icons-material/Sailing';

import { Button, Input } from "@mui/material";

const SendMessageBox = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.body__send__message}>
          {/* <span>This is message box</span> */}
          <input className={styles.body__send__message__input}/>
          <button className={styles.message__button}>< SailingIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageBox
