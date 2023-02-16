import React from 'react'
import styles from "./MessageTimeline.module.css"

const MessageTimeline = () => {
  return (
    <div className={styles.body}>
      <div className={styles.message__top}>
        <p># Channel 1</p>
      </div>
      <div className={styles.message}>
        This is TimeLine
      </div>
    </div>
  )
}

export default MessageTimeline
