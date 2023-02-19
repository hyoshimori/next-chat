import React, { useEffect, useState } from 'react'
import styles from "./SideBar.module.css"

import { useChannels } from '@/hooks/useChannels';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SailingIcon from '@mui/icons-material/Sailing';
import Link from 'next/link';

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
          <Link href='./' className={styles.channel__icon__link}>
            <SailingIcon className={styles.channel__icon}/>
          </Link>
        </div>
        <div className={styles.channel}>
          <div className={styles.channel__lines}>
            <button className={styles.channel__lines__button} onClick={toggleSwitch}>
              <ArrowDropDownIcon className={styles.channel__lines__icon}/>
            </button>
            <span>Channels</span>
          </div>
          <div style={{ display: isSwitchOn ? "inline-block" : "none" }} className={styles.channel__names}>
            {
              channels.map((channel) => {
                return(
                  <>
                    <Link href={`/channels/${channel.id}`} style={{ textDecoration: 'none' }}>
                      <div key={channel.id}>
                        <span className={styles.mapped__channel__name}>{channel.title}</span>
                      </div>
                    </Link>
                  </>
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
