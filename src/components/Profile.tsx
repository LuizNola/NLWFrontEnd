import { useContext } from 'react';
import { ChallengensContexts } from '../contexts/challengensContexts';
import style from '../styles/components/Profile.module.css';
export function Profile() {
    const { level } = useContext(ChallengensContexts)
    return (
        <div className={style.profileContainer}>
            <img src='https://github.com/luizNola.png' alt='Foto de perfil' />
            <div>

                <strong>Luiz Nola</strong>
                <p>
                    <img src='icons/level.svg' alt='Level icon' />
                    Level {level}
                </p>
            </div>
        </div>
    );
}