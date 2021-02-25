import { createContext, ReactNode, useContext, useState } from 'react'
import { ChallengeInterface } from '../interfaces/challenge.interface'

import CHALLENGES from '../../challenges.json'

interface ChallengeContextInterface {
    level: number
    currentExperience: number
    totalChallengesCompleted: number
    experienceToNextLevel: number
    activeChallenge?: ChallengeInterface

    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
}

interface ChallengeProviderProps {
    children: ReactNode
}

const ChallengeContext = createContext({} as ChallengeContextInterface)

export function ChallengeContextProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState<number>(1)
    const [currentExperience, setCurrentExperience] = useState<number>(0)
    const [totalChallengesCompleted, setTotalChallengesCompleted] = useState<number>(0)
    const [activeChallenge, setActiveChallenge] = useState<ChallengeInterface>(null)

    const experienceToNextLevel = ((level + 1) * 4)**2

    const levelUp = () => setLevel(oldLevel => oldLevel + 1)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * CHALLENGES.length)
        const challenge = CHALLENGES[randomChallengeIndex]

        setActiveChallenge(challenge as ChallengeInterface)
    }

    const resetChallenge = () => setActiveChallenge(null)

    return (
        <ChallengeContext.Provider value={{ 
            level, 
            currentExperience, 
            totalChallengesCompleted,
            experienceToNextLevel,
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge,
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}

export const useChallengeContext = () => useContext(ChallengeContext)