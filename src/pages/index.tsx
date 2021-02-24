import React from 'react';

import styles from '../styles/pages/home.module.css';

import { ExperienceBar } from '../components/expirenceBar';
import { Profile } from '../components/Profile';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
