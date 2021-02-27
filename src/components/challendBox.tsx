import { useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts'
import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {
    
    const {activeChallend, resetChallenge} = useContext(ChallengensContexts)

    return(
        <div className={styles.ChallendBoxContaine}>

            {activeChallend ? 
            (
                <div className={styles.ChallendActive}>
                    <header>Ganhe {activeChallend.amount}!</header>

                    <main>
                        <img src={`icons/${activeChallend.type}.svg` } alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallend.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button" 
                        className={styles.failedButton} 
                        onClick={resetChallenge} >Falhei</button>
                        
                        <button 
                        type="button" 
                        className={styles.completeButton} 
                        /*onClick={}*/ >Completei</button>
                    </footer>
                </div>
            ) 
            : 
            (
                 <div className={styles.ChallendNotActive}>
                 <strong>
                     Inicie um ciclo
                     para receber desafios a
                     serem completados
                 </strong>
                 <p>
                     <img src='icons/level-up.svg' alt='Level Up'/>
                     Avance de level completando desafios
                 </p>
             </div>
            )}
           
        </div>
    )
}