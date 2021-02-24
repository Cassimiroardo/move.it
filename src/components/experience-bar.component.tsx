import styles from '../styles/components/experience-bar.module.css'

export function ExperienceBarComponent() {
    return (
        <header className={styles.experienceBar}>
            <span>
                xp
            </span>
            <div>
                <div style={{ width: '50%' }} /> 
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>
                600 xp
            </span>
        </header>
    )
}