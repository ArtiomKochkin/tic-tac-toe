import NextMove from "./next-move/NextMove";
import styles from "./GameActions.module.scss";
import GameButtons from "./game-buttons/GameButtons";
import GameResult from "./game-result/GameResult";

const GameActions = ({ isResult }) => {
    return (
        <div className={styles.actions}>
            {isResult 
                ? <>
                    <GameResult result={"player"} className={styles.actions__text}/>
                    <GameButtons className={styles.actions__buttons}/>
                </>
                : <NextMove player="player" className={styles.actions__text}/>
            }
        </div>
    )
}

export default GameActions;