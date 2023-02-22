import React, { useEffect } from 'react'
import MessageTimeline from "@/components/MessageTimeline";
import SendMessageBox from '@/components/SendMessageBox';
// import { useRouter } from 'next/router';

import { useMessages } from '@/hooks/useMessages';

import 'normalize.css'
import { useRouter } from 'next/router';

const Channel = () => {

  // Might need this when adding other channels
  // const { query } = useRouter();
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
