import React from 'react';
import Head from 'next/head'

import styles from '../styles/pages/home.module.css';

import { CountDownProvider } from '../contexts/countDownContexts'

import { ExperienceBar } from '../components/expirenceBar';
import { Profile } from '../components/Profile';
import { CompleteChallends } from '../components/completeChallends';
import { CountDown } from '../components/countDown';
import { ChallendBox } from '../components/challendBox';

export default function Home() {
  return (



    <div className={styles.container}>

    <Head>
      <title>MoveIt</title>
    </Head>

      <ExperienceBar/>

      <CountDownProvider>
      <section>
        <div>
          <Profile/>
          <CompleteChallends/>
          <CountDown/>
        </div>
        <div>
          <ChallendBox/>
        </div>
      </section>
      </CountDownProvider>
    </div>
  )
}
