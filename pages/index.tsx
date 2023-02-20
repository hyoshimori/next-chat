import Head from 'next/head'
import { Inter } from '@next/font/google'
import Base from 'Base'
import 'normalize.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Chat</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Base />
      </main>
    </>
  )
}
