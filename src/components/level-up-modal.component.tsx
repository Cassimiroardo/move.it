import { useChallengeContext } from '../contexts/challenge.context'
import styles from '../styles/components/level-up-modal.module.css'

export function LevelUpModalComponent(): JSX.Element {
    const { level, closeLevelUpModal } = useChallengeContext()
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}