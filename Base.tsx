import React from 'react'
import styles from "./Base.module.css";

import MessageTimeline from './components/MessageTimeline';
import SendMessageBox from './components/SendMessageBox';
import DefaultPage from './components/DefaultPage';

const Base = () => {
  return (
    <div className={styles.body}>
      <div>
        {/* <MessageTimeline />
        <SendMessageBox /> */}
        <DefaultPage />
      </div>
    </div>
  )
}

export default Base
