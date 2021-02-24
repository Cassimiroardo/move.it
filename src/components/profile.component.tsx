import styles from '../styles/components/profile.module.css'

export function ProfileComponent() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cassimiroardo.png" alt="Cassimiro"/>
            <div>
                <strong>
                    Eduardo Cassimiro
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}