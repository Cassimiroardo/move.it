import { useChallengeContext } from '../contexts/challenge.context'
import styles from '../styles/components/experience-bar.module.css'

export function ExperienceBarComponent() {
    const { currentExperience, experienceToNextLevel } = useChallengeContext()

    const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>
                xp
            </span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} /> 
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>
                {experienceToNextLevel} xp
            </span>
        </header>
    )
}