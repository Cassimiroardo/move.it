import { useCountdownContext } from '../contexts/countdown.context'

import styles from '../styles/components/countdown.module.css'

export function CountdownComponent() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useCountdownContext()
    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')

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