import { useChallengeContext } from '../contexts/challenge.context'
import styles from '../styles/components/completed-challenge.module.css'

export function CompletedChallengesComponent() {
    const { totalChallengesCompleted } = useChallengeContext()

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{totalChallengesCompleted}</span>
        </div>
    )
}