import React from 'react'
import styles from "./MessageTimeline.module.css"
import { useRouter } from 'next/router';
import Header from './Header';
import Message from './Message';

import * as MessageType from  "@/types/Message"

type Props = {
  messages: MessageType.Message[];
}

const MessageTimeline = (props: Props) => {

  const router = useRouter();
  const { id } = router.query;

  console.log("id:", id)
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.message}>
      {props.messages.map((m)=> {
          return(
            <Message body={m.body} key={m.id}></Message>
          )
        })}
      </div>
    </div>
  )
}

export default MessageTimeline
