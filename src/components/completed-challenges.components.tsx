import styles from '../styles/components/completed-challenge.module.css'

export function CompletedChallengesComponent() {
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}