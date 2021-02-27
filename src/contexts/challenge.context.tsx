import { 
    createContext, 
    ReactNode, 
    useContext, 
    useEffect, 
    useState } from 'react'
import Cookies from 'js-cookie'

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
    completeChallenge: () => void
}

interface ChallengeProviderProps {
    children: ReactNode
    level: number
    currentExperience: number
    totalChallengesCompleted: number
}

const ChallengeContext = createContext({} as ChallengeContextInterface)

export function ChallengeContextProvider({ 
    children,  
    ...rest
}: ChallengeProviderProps) {
    const [level, setLevel] = useState<number>(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState<number>(rest.currentExperience ?? 0)
    const [totalChallengesCompleted, setTotalChallengesCompleted] = useState<number>(rest.totalChallengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState<ChallengeInterface>(null)

    const experienceToNextLevel = ((level + 1) * 4)**2

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level',String(level))
        Cookies.set('currentExperience',String(currentExperience))
        Cookies.set('totalChallengesCompleted',String(totalChallengesCompleted))
    }, [level, currentExperience, totalChallengesCompleted])

    const levelUp = () => setLevel(oldLevel => oldLevel + 1)

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * CHALLENGES.length)
        const challenge = CHALLENGES[randomChallengeIndex]

        setActiveChallenge(challenge as ChallengeInterface)

        new Audio('/notification.mp3').play()
        if(Notification.permission === "granted") new Notification('Novo desafio 🏋🏼‍♀️', {
            body: `Valendo ${challenge.amount} xp`,

        })
    }

    const resetChallenge = () => setActiveChallenge(null)

    const completeChallenge = () => {
        if(!activeChallenge) return

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        resetChallenge()
        setTotalChallengesCompleted(oldTotal => oldTotal + 1)
    }

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
            completeChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}

export const useChallengeContext = () => useContext(ChallengeContext)