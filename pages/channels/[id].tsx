import React, { useEffect } from 'react'
import MessageTimeline from "@/components/MessageTimeline";
import SendMessageBox from '@/components/SendMessageBox';
// import { useRouter } from 'next/router';

import { useMessages } from '@/hooks/useMessages'; {}

import 'normalize.css'

const Channel = () => {

//   const ms = [
//     {
//     id: "1",
//     body: "Hello World",
//     channelId: "1"
//   },
// ]

  const { messages, fetchMessages } = useMessages();

  useEffect(() => {
    fetchMessages();
  }, [])

  return (
    <div>
      <MessageTimeline messages={messages}/>
      <SendMessageBox/>
    </div>
  )
}

export default Channel
