import React, { useEffect } from 'react'
import styles from "./SideBar.module.css"

import { useChannels } from '@/hooks/useChannels';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Sidebar = () => {

  const { channels } = useChannels()

  return (
    <div className={styles.body}>
      <div className={styles.icon__and__channels}>
        <div className={styles.channel__icon__position}>
          <ChatBubbleIcon className={styles.channel__icon}/>
        </div>
        <div className={styles.channel}>
          <div className={styles.channel__lines}>
            <ArrowDropDownIcon className={styles.channel__lines__icon}/>
            <span>Channels</span>
          </div>
          <div className={styles.channel__names}>
            <span># Channel 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
