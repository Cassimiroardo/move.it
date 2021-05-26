import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useChallengeContext } from "./challenge.context";

interface CountdownContextInterface {
    INITIAL_TIME: number
    minutes: number
    seconds: number
    hasFinished: boolean
    isActive: boolean

    startCountdown: () => void
    resetCountdown: () => void
}

interface CountdownProps {
    children: ReactNode
}

const CountdownContext = createContext({} as CountdownContextInterface)

let countdownTimeout: NodeJS.Timeout

export function CountdownContextProvider({children}: CountdownProps) {
    const INITIAL_TIME = 0.05 * 60
    const [timeInSeconds, setTimeInSeconds] = useState<number>(INITIAL_TIME)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [hasFinished, setHasFinished] = useState<boolean>(false)

    const { startNewChallenge } = useChallengeContext()

    const minutes = Math.floor(timeInSeconds/60)
    const seconds = timeInSeconds%60

    const startCountdown = () => setIsActive(true)

    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTimeInSeconds(INITIAL_TIME)
        setHasFinished(false)
    }

    const finishCountdown = () => {
        setHasFinished(true)
        setIsActive(false)
        startNewChallenge()
    }

    useEffect(() => {
        if(!isActive || timeInSeconds < 0) return
        if(timeInSeconds === 0) return finishCountdown()
        countdownTimeout = setTimeout(
                    () => setTimeInSeconds(timeInSeconds - 1), 1000)
    }, [isActive, timeInSeconds])

    return (
        <CountdownContext.Provider value={{
            INITIAL_TIME,
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export const useCountdownContext = () => useContext(CountdownContext)