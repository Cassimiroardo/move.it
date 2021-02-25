import { createContext, ReactNode, useState } from 'react'

interface ChallengeContextInterface {
    level: number
    currentExperience: number
    totalChallengesCompleted: number

    levelUp: () => void
    startNewChallenge: () => void
}

interface ChallengeProviderProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextInterface)

export function ChallengeContextProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState<number>(1)
    const [currentExperience, setCurrentExperience] = useState<number>(0)
    const [totalChallengesCompleted, setTotalChallengesCompleted] = useState<number>(0)


    const levelUp = () => setLevel(oldLevel => oldLevel + 1)

    const startNewChallenge = () => {
        console.log('novo desafio')
    }

    return (
        <ChallengeContext.Provider value={{ 
            level, 
            currentExperience, 
            totalChallengesCompleted ,
            levelUp,
            startNewChallenge, 
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}