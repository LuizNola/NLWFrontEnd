import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {
    const activeTest = true

    return(
        <div className={styles.ChallendBoxContaine}>

            {activeTest ? 
            (
                <div className={styles.ChallendActive}>
                    <header>Ganhe 400XP!</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Caminhe e malhe</p>
                    </main>

                    <footer>
                        <button 
                        type="button" 
                        className={styles.failedButton} 
                        /*onClick={}*/ >Falhei</button>
                        
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