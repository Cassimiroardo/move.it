import styles from '../styles/components/challenge-box.module.css'

export function ChallengeBoxComponent() {
    const hasActiveChallenge = true

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Desafio</strong>
                        <p>Levante ai cara</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}>
                                Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}>
                                Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level"/>
                    Avance de level completando desafios.
                </p>
            </div>
            ) }
            
        </div>
    )
}