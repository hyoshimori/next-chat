import React from 'react'
import styles from "./MessageTimeline.module.css"
import { useRouter } from 'next/router';


const MessageTimeline = () => {

  const router = useRouter();
  const { id } = router.query;

  console.log("id:", id)
  return (
    <div className={styles.body}>
      <div className={styles.message__top}>
        <p># Channel 1</p>
      </div>
      <div className={styles.message}>
        This is TimeLine: Id: {id}
      </div>
    </div>
  )
}

export default MessageTimeline
