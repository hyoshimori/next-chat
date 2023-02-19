import Layout from '@/layouts/SidebarLayout'
import type { AppProps } from 'next/app'
import styles from "@/styles/Home.module.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={styles.body}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)}
