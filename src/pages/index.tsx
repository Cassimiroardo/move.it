import Head from 'next/head'

import { CompletedChallengesComponent } from "../components/completed-challenges.components";
import { CountdownComponent } from "../components/countdown.components";
import { ExperienceBarComponent } from "../components/experience-bar.component";
import { ProfileComponent } from "../components/profile.component";
import { ChallengeBoxComponent } from "../components/challenge-box.component";
import { CountdownContextProvider } from '../contexts/countdown.context';

import styles from '../styles/pages/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBarComponent />
      <CountdownContextProvider>
        <section>
          <div>
            <ProfileComponent />
            <CompletedChallengesComponent />
            <CountdownComponent />
          </div>
          <div>
            <ChallengeBoxComponent />
          </div>
        </section>
      </CountdownContextProvider>
    </div>    
  )
}
