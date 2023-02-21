import React from 'react'
import styles from "./MessageTimeline.module.css"
import { useRouter } from 'next/router';
import Header from './Header';
import Message from './Message';

import * as MessageType from  "@/types/Message"

// ********** NOTE ********** //
// MessageType (this can be called however we want to) is a namespace object that is created when importing the Message module using import * as MessageType.
// Message is a type that is exported from the Message module and accessed through the MessageType namespace object.
//Putting it all together, MessageType.Message[] is a type that represents an array of objects with the shape defined by the Message type that is a member of the MessageType namespace object.
// ********** NOTE ********** //

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
