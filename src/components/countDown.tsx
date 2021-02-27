import { useState, useEffect, useContext } from 'react'
import { ChallengensContexts } from '../contexts/challengensContexts';
import styles from '../styles/components/countDown.module.css'

let countDownTimeout: NodeJS.Timeout

export function CountDown() {

    const { startNewChallege } = useContext(ChallengensContexts) 

    const [time, setTime] = useState(2);
    const [active, setActive] = useState(false);
    const [finished, setFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setActive(false);
        setTime(25 * 60)
    }

    useEffect(() => {
        if (active && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (active && time === 0) {
            setFinished(true);
            setActive(false)
            startNewChallege()
        }
    }, [active, time])

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