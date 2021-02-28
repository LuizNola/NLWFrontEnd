import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengensContexts } from "./challengensContexts";


interface CountDownContextData{
    minutes: number;
    seconds: number;
    finished: boolean;
    active: boolean;
    startCountDown: ()=>void;
    resetCountDown: ()=>void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

let countDownTimeout: NodeJS.Timeout

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({ children }: CountDownProviderProps){
    const { startNewChallege } = useContext(ChallengensContexts) 

    const [time, setTime] = useState(2);
    const [active, setActive] = useState(false);
    const [finished, setFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setActive(false);
        setTime(2)
        setFinished(false)
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


    return(
        <CountDownContext.Provider value={{
            minutes, 
            seconds, 
            finished,
            active,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}
