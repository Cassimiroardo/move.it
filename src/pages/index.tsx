import { GetServerSideProps } from 'next';
import Head from 'next/head'

import { CompletedChallengesComponent } from "../components/completed-challenges.components";
import { CountdownComponent } from "../components/countdown.components";
import { ExperienceBarComponent } from "../components/experience-bar.component";
import { ProfileComponent } from "../components/profile.component";
import { ChallengeBoxComponent } from "../components/challenge-box.component";
import { CountdownContextProvider } from '../contexts/countdown.context';
import { ChallengeContextProvider } from '../contexts/challenge.context';

import styles from '../styles/pages/home.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  totalChallengesCompleted: number
}

export default function Home({
    level,
    currentExperience,
    totalChallengesCompleted
  }: HomeProps) {
  return (
    <ChallengeContextProvider 
            level={level} 
            currentExperience={currentExperience} 
            totalChallengesCompleted={totalChallengesCompleted}>
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
    </ChallengeContextProvider>    
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    level,
    currentExperience,
    totalChallengesCompleted,
  } = context.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      totalChallengesCompleted: Number(totalChallengesCompleted) 
    }
  }
}