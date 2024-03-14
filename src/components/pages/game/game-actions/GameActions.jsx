import NextMove from "./next-move/NextMove";
import styles from "./GameActions.module.scss";
import GameButtons from "./game-buttons/GameButtons";
import GameResult from "./game-result/GameResult";

const GameActions = ({ isResult, nextPlayer, winner, resetBoard }) => {
    return (
        <div className={styles.actions}>
            {isResult 
                ? <>
                    <GameResult winner={winner} className={styles.actions__text}/>
                    <GameButtons resetBoard={resetBoard} className={styles.actions__buttons}/>
                </>
                : <NextMove player={nextPlayer} className={styles.actions__text}/>
            }
        </div>
    )
}

export default GameActions;