import style from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src='https://github.com/luizNola.png' alt='Foto de perfil' />
            <div>

                <strong>Luiz Nola</strong>
                <p>
                    <img src='icons/level.svg' alt='Level icon' />
                    Level 1
                </p>
            </div>
        </div>
    );
}