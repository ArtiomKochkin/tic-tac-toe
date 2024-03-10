import NextMove from "./next-move/NextMove";
import styles from "./GameActions.module.scss";
import GameButtons from "./game-buttons/GameButtons";
import GameResult from "./game-result/GameResult";

const GameActions = () => {
    return (
        <div className={styles.actions}>
            <NextMove player="player" className={styles.actions__text}/>
            <GameResult result={"player"} className={styles.actions__text}/>
            <GameButtons className={styles.actions__buttons}/>
        </div>
    )
}

export default GameActions;