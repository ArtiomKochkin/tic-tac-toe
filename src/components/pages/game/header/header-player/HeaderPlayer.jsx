import styles from "./HeaderPlayer.module.scss";

const HeaderPlayer = ({ player, names }) => {
    return (
        <div className={styles.player}>
            {player === "x"
                ? <>
                    <img className={styles.player__img} src="./img/x.svg" alt="X" />
                    <div className={styles.player__text}>
                         - {names[0]}
                    </div>
                </> 
                : <>
                    <div className={styles.player__text}>
                        {names[1]} - 
                    </div>
                    <img className={styles.player__img} src="./img/o.svg" alt="O" />
                </>
            }
        </div>
    )
}

export default HeaderPlayer;