import React from 'react'
import Sidebar from "./Sidebar";

import styles from "./Base.module.css";

const Base = () => {
  return (
    <div className={styles.body}>
      <Sidebar/>
      This is the base
    </div>
  )
}

export default Base
