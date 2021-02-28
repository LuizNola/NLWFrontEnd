import { createContext, ReactNode, useEffect, useState } from  'react';
import challenges from '../../challenges.json'


interface challengensProviderProps {
    children: ReactNode;
}

interface challend{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface challengensContextsData {
    level:number;
    levelUp: ()=>void;
    currentXp:number;
    experiencToNextLevel: number;
    activeChallend: challend;
    challengensCompleted:number; 
    startNewChallege:()=>void;
    resetChallenge: ()=>void;
    completeChallends: ()=>void;
    
}

export const ChallengensContexts = createContext({} as challengensContextsData);

export function ChallengensProvider({ children } : challengensProviderProps) {
    const [ level, setLevel ] = useState(1);
    const [ currentXp, setCurrentXp ] = useState(0);
    const [ challengensCompleted, setChallengeCompleted ] = useState(0);

    const [activeChallend, setActiveChallend ] = useState(null)

    const experiencToNextLevel = Math.pow((level+1) * 4,2)

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    function  levelUp(){
        setLevel(level+1)
    }

    function startNewChallege() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallend(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission == 'granted'){
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    

    function resetChallenge() {
        setActiveChallend(null)
    }

    function completeChallends() {
        if(!activeChallend){
            return;
        }
        const { amount } = activeChallend;
        
        let finalXp = currentXp + amount;

        if(finalXp >= experiencToNextLevel) {
            finalXp = finalXp - experiencToNextLevel
            levelUp();
        }

        setCurrentXp(finalXp);
        setActiveChallend(null);
        setChallengeCompleted(challengensCompleted + 1)
    }

    return (
        <ChallengensContexts.Provider 
        value={{ 
            level, 
            levelUp, 
            currentXp,
            activeChallend, 
            challengensCompleted, 
            startNewChallege,
            resetChallenge,
            experiencToNextLevel,
            completeChallends }}>
            {children}
        </ChallengensContexts.Provider>
    )
} 