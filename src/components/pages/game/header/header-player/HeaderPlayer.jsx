import styles from "./HeaderPlayer.module.scss";

const HeaderPlayer = ({ player, names }) => {

    // if (window.innerWidth < 400) {
    //     names = names.map(name => 
    //         name.length > 8  ? name.slice(0, 8) + "..." : name   
    //     )
    // }

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