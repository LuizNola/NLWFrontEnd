import React from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import styles from '../styles/pages/home.module.css';

import { CountDownProvider } from '../contexts/countDownContexts'
import { ChallengensProvider } from '../contexts/challengensContexts';

import { ExperienceBar } from '../components/expirenceBar';
import { Profile } from '../components/Profile';
import { CompleteChallends } from '../components/completeChallends';
import { CountDown } from '../components/countDown';
import { ChallendBox } from '../components/challendBox';

interface HomeProps{
  level: number;
  currentXp: number;
  challengensCompleted: number;
}

export default function Home(props) {
  return (
  <ChallengensProvider 
  level={props.level} 
  currentXp={props.currentXp} 
  challengensCompleted={props.challengensCompleted} >
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
  </ChallengensProvider> 
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, CurrentXp, challengensCompleted} = ctx.req.cookies
  return {
    props:{
      level: Number(level),
      currentXp: Number(CurrentXp),
      challengensCompleted: Number(challengensCompleted)
    }
  }
}