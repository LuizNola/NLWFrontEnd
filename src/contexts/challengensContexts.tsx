import { createContext, ReactNode, useState } from  'react';
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
    
}

export const ChallengensContexts = createContext({} as challengensContextsData);

export function ChallengensProvider({ children } : challengensProviderProps) {
    const [ level, setLevel ] = useState(1);
    const [ currentXp, setCurrentXp ] = useState(60);
    const [ challengensCompleted, setChallengeCompleted ] = useState(0);

    const [activeChallend, setActiveChallend ] = useState(null)

    const experiencToNextLevel = Math.pow((level+1) * 4,2)


    function  levelUp(){
        setLevel(level+1)
    }

    function startNewChallege() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallend(challenge)
    }

    function resetChallenge() {
        setActiveChallend(null)
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
            experiencToNextLevel }}>
            {children}
        </ChallengensContexts.Provider>
    )
} 