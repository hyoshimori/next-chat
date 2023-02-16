import React from 'react'
import styles from "./SideBar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.channel}>
        <span># Channel 1</span>
      </div>
    </div>
  )
}

export default Sidebar
