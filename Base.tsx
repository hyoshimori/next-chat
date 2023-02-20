import React from 'react'
import styles from "./Base.module.css";

import MessageTimeline from './components/MessageTimeline';
import SendMessageBox from './components/SendMessageBox';

const Base = () => {
  return (
    <div className={styles.body}>
      <div>
        {/* <MessageTimeline />
        <SendMessageBox /> */}
      </div>
    </div>
  )
}

export default Base
