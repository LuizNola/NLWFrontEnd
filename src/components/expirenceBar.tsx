import { useContext } from 'react';
import { ChallengensContexts } from '../contexts/challengensContexts';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {

    const { currentXp, experiencToNextLevel } = useContext(ChallengensContexts)

    const percentToNextLevel = Math.round(currentXp * 100) / experiencToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>
                <span className={styles.currentExperience} style={{ left: '50%'}}>{currentXp}xp</span>
            </div>
            <span>{experiencToNextLevel} xp</span>
        </header>
    )
}