import React from 'react'
import MessageTimeline from "@/components/MessageTimeline";
import SendMessageBox from '@/components/SendMessageBox';
// import { useRouter } from 'next/router';

import 'normalize.css'

const Channel = () => {
  return (
    <div>
      <MessageTimeline/>
      <SendMessageBox/>
    </div>
  )
}

export default Channel
