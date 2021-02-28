import { useState, useEffect, useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts';
import { CountDownContext } from '../contexts/countDownContexts';
import styles from '../styles/components/countDown.module.css'



export function CountDown() {

    const {  
        minutes, 
        seconds, 
        finished,
        active,
        startCountDown,
        resetCountDown } = useContext(CountDownContext)

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');

    
    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>
                </div>
            </div>

            {finished ? (
                <button
                    disabled
                    className={styles.bntStart}>
                    Ciclo encerrado!
                </button>
            ) : (
                    <>
                        {active ? (
                            <button
                                onClick={resetCountDown}
                                type="button"
                                className={`${styles.bntStart} ${styles.bntStartActive}`}>
                                Abandonar ciclo
                            </button>
                        ) :
                            (
                                <button
                                    onClick={startCountDown}
                                    type="button"
                                    className={styles.bntStart}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}


        </div>
    )
}