import { useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts'
import { CountDownContext } from '../contexts/countDownContexts'
import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {
    
    const {activeChallend, resetChallenge, completeChallends} = useContext(ChallengensContexts)
    const { resetCountDown } = useContext(CountDownContext)

    function handleChallengeFail(){
        resetChallenge();
        resetCountDown();
    }

    function handleChallengeSucess(){
        completeChallends();
        resetCountDown();
    }

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
                        onClick={handleChallengeFail} >Falhei</button>
                        
                        <button 
                        type="button" 
                        className={styles.completeButton} 
                        onClick={handleChallengeSucess} >Completei</button>
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