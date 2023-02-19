import React, { useEffect, useState } from 'react'
import styles from "./SideBar.module.css"

import { useChannels } from '@/hooks/useChannels';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Sidebar = () => {

  const { channels } = useChannels()

  const [isSwitchOn, setSwitchOn] = useState(true);

  const toggleSwitch = () => {
    // Hide when the button is pusshed
    setSwitchOn(!isSwitchOn);
  };

  return (
    <div className={styles.body}>
      <div className={styles.icon__and__channels}>
        <div className={styles.channel__icon__position}>
          <ChatBubbleIcon className={styles.channel__icon}/>
        </div>
        <div className={styles.channel}>
          <div className={styles.channel__lines}>
            <button className={styles.channel__lines__button} onClick={toggleSwitch}>
              <ArrowDropDownIcon className={styles.channel__lines__icon}/>
            </button>
            <span>Channels</span>
          </div>
          <div style={{ display: isSwitchOn ? "block" : "none" }} className={styles.channel__names}>
            {
              channels.map((channel) => {
                return(
                  <div key={channel.id} className={styles.mapped__channel__name}>
                    <span>{channel.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
