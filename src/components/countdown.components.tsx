import { useState, useEffect } from 'react'
import styles from '../styles/components/countdown.module.css'

export function CountdownComponent() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(25 * 60)
    const [active, setActive] = useState<boolean>(false)
    const minutes = Math.floor(timeInSeconds/60)
    const seconds = timeInSeconds%60
    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setActive(true)
    }

    useEffect(() => {
        if(active && timeInSeconds > 0)
            setTimeout(() => {
                setTimeInSeconds(timeInSeconds - 1)
            }, 1000)
    }, [active, timeInSeconds])

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

        <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
            >
            Iniciar um ciclo
        </button>
        </div>
    )
}