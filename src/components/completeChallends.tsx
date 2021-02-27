import { useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts'
import styles from '../styles/components/completeChallends.module.css'

export function CompleteChallends(){
    const {challengensCompleted} = useContext(ChallengensContexts)
    return(
        <div className={styles.completedChallendsContainer}>
            <span>Desafios completos</span>
            <span>{challengensCompleted}</span>
        </div>
    )
}