import { useState, useEffect } from 'react'
import styles from '../styles/components/countDown.module.css'

export function CountDown() {

    const [time, setTime] = useState(15*60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2,'0').split('');

    function startCountDown(){
        setActive(true);
    }
    
    useEffect(() =>{
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

    return(
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

        <button onClick={startCountDown} type="button" className={styles.bntStart}>
            Iniciar um ciclo
        </button>
    </div>
    )
}