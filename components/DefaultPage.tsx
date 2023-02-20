import React from 'react'
import styles from "./DefaultPage.module.css"

import SmartToyIcon from '@mui/icons-material/SmartToy';
import Header from './Header';

const DefaultPage = () => {
  return (
    <div className={styles.body}>
      <Header/>
      <div className={styles.message__bottom}>
        <div className={styles.app__explination__top}>
          <SmartToyIcon className={styles.bot__icon}/>
          <h1>Next.js Chat App - Inspired by Slack</h1>
        </div>
        <div className={styles.message__bottom__from__bot}>
          <p>This is a chat application inspired by Slack, built using Next.js and Material UI icons. The app enables seamless communication for users, with a mobile-friendly and responsive design that enhances accessibility. The implementation of Firebase real-time database ensures efficient data management.</p>
          <h2>💻 Technologies</h2>
          <p>The chat application was built using the following primary technologies:</p>
          <ul className={styles.message__bottom__from__bot__list}>
            <li>✅ Next.js: A popular open-source React framework for building server-side rendered and statically generated web applications.</li>
            <li>✅ Firebase: A cloud-based platform for building and managing web and mobile applications. Firebase was used to provide real-time updates for the chat application.</li>
            <li>✅ Material UI: A library of React components that implement Material Design for a modern and consistent user interface.</li>
          </ul>
          <h2>📩 Contact Information</h2>
          <p>Please contact me for any further information or inquiries at <a className={styles.message__bottom__from__bot__contact__mail} href="mailto:hiroto.y.129@gmail.com">hiroto.y.129@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default DefaultPage
