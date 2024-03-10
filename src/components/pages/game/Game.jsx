import Header from "./header/Header";
import styles from "./Game.module.scss";
import GameActions from "./game-actions/GameActions";

const Game = () => {
    return (
        <div className={styles.game}>
            <Header/>
            <GameActions/>
        </div>
    )
}

export default Game;