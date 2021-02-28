import { useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {

    const {level, closeModal } = useContext(ChallengensContexts)

   

    return(
        <div className={styles.overlay}>

            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou o proximo nivel!</p>

                <button type="button" onClick={closeModal}><img src="/icons/close.svg" alt="fechar modal"/></button>
            </div>

        </div>
    )
}