import React from 'react'
import styles from "./Header.module.css"
import { useRouter } from 'next/router';


const Header = () => {

  const router = useRouter();
  const { id } = router.query;

  console.log("id:", router)
  return (
    <div className={styles.body}>
      <div className={styles.message__top}>
      <p>Current Id: {id !== undefined ? id : "Welcome to OurChat !"}</p>
      </div>
    </div>
  )
}

export default Header
