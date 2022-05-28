import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import "antd/dist/antd.css"
import styles from '../styles/Home.module.css'

import RightPanel from '../components/RightPanel'

export default function Home() {
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const toggleRightPanel = () => {
    setRightPanelOpen((prev) => !prev)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Hiver demo app</title>
        <meta name="description" content="Hiver demo app" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div
          style={{
            width: `${rightPanelOpen ? "calc(100% - 262px)" : "100%" }`,
          }}
        >
          <div style={{width: '100%', height: '55px', position: 'relative'}}>
            <Image src="/email-line1.png" layout='fill' onClick={toggleRightPanel} />
          </div>
          <div style={{width: '100%', height: '55px', position: 'relative'}}>
            <Image src="/email-line2.png" layout='fill' onClick={toggleRightPanel} />
          </div>
        </div>
        {rightPanelOpen && <RightPanel /> }
      </div>
    </div>
  )
}
