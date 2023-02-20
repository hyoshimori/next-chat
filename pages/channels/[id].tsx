import React from 'react'
import MessageTimeline from "@/components/MessageTimeline";
import SendMessageBox from '@/components/SendMessageBox';
// import { useRouter } from 'next/router';

import 'normalize.css'

const Channel = () => {

  const ms = [
    {
    id: "1",
    body: "Hello World",
    channelId: "1"
  },
]

  return (
    <div>
      <MessageTimeline messages={ms}/>
      <SendMessageBox/>
    </div>
  )
}

export default Channel
