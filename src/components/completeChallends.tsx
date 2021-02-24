import styles from '../styles/components/completeChallends.module.css'

export function CompleteChallends(){
    return(
        <div className={styles.completedChallendsContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}