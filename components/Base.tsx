import React from 'react'
import Sidebar from "./Sidebar";
import MessageTimeline from './MessageTimeline';

import styles from "./Base.module.css";
import SendMessageBox from './SendMessageBox';

const Base = () => {
  return (
    <div className={styles.body}>
      <Sidebar/>
      <div>
        <MessageTimeline />
        <SendMessageBox />
      </div>
    </div>
  )
}

export default Base
