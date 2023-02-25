import React from 'react'
import styles from "./MessageTimeline.module.css"
import { useRouter } from 'next/router';
import Header from './Header';
import Message from './Message';

import PeopleIcon from '@mui/icons-material/People';
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

  const extractTime = (dateString: string): string | null => {
    if (!dateString) {
      return null;
    }
    const regex = /(\d{2}:\d{2}:\d{2})/;
    const match = dateString.match(regex);
    return match ? match[0] : null;
  };

  const extractDate = (dateString: string): string | null => {
    const regex = /^([a-zA-Z]{3} [a-zA-Z]{3} \d{2} \d{4})/;
    const match = dateString.match(regex);
    return match ? match[1] : null;
  };

  console.log("id:", id)
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.message}>
      {props.messages.map((m)=> {
          return(
            <div key={m.id} className={styles.one__message}>
              <PeopleIcon className={styles.message__icon}/>
              <div className={styles.message__and__id}>
                  <div className={styles.message__and__id__and__createdat}>
                    <div>
                      <span>Date: {extractDate(m.createdAt)}, </span>
                      <span>{extractTime(m.createdAt)}</span>
                    </div>
                    <span>Message ID: {m.id}</span>
                  </div>
                <Message body={m.body} key={m.id}></Message>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MessageTimeline
