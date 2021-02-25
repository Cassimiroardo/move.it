import { useState, useEffect, useContext } from 'react'
import { ChallengeContext } from '../contexts/challenge.context'

import styles from '../styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout

const INITIAL_TIME = 0.1 * 60

export function CountdownComponent() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(INITIAL_TIME)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [hasFinished, setHasFinished] = useState<boolean>(false)

    const { startNewChallenge } = useContext(ChallengeContext)

    const minutes = Math.floor(timeInSeconds/60)
    const seconds = timeInSeconds%60
    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => setIsActive(true)

    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTimeInSeconds(INITIAL_TIME)
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
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{leftMinute}</span>
                <span>{rightMinute}</span>
            </div>
            <span>:</span>
            <div>
                <span>{leftSecond}</span>
                <span>{rightSecond}</span>
            </div>
        </div>
        { hasFinished ? (
                <button 
                type="button"
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
        ) 
        : isActive ? 
        (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}>
                Abandonar ciclo
            </button>
        ) :
        (
            <button 
            type="button" 
            className={styles.countdownButton}
                onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        ) 
        }
        </div>
    )
}