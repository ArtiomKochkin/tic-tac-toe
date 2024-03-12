import Header from "./header/Header";
import styles from "./Game.module.scss";
import GameActions from "./game-actions/GameActions";
import Board from "./board/Board";

const Game = () => {
    return (
        <div className={styles.game}>
            <Header/>
            <GameActions/>
            <Board size={3} />
        </div>
    )
}

export default Game;