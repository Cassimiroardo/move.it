import { useChallengeContext } from '../contexts/challenge.context'
import styles from '../styles/components/profile.module.css'

export function ProfileComponent() {
    const { level } = useChallengeContext()
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cassimiroardo.png" alt="Cassimiro"/>
            <div>
                <strong>
                    Eduardo Cassimiro
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}