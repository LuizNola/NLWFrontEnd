import React from 'react';

import styles from '../styles/pages/home.module.css';

import { ExperienceBar } from '../components/expirenceBar';
import { Profile } from '../components/Profile';
import { CompleteChallends } from '../components/completeChallends';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompleteChallends/>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
