import Header from "./header/Header";
import styles from "./Game.module.scss";
import GameActions from "./game-actions/GameActions";
import Board from "./board/Board";
import { useContext, useState } from "react";
import { SettingsContext } from "../../../providers/SettingsProvider";

const Game = () => {
    const {gameSettings, setGameSettings} = useContext(SettingsContext);
    const [isResult, setIsResult] = useState(true);

    console.log(gameSettings);

    return (
        <div className={styles.game}>
            <Header names={Object.values(gameSettings.playersName)}/>
            <GameActions isResult={isResult}/>
            <Board size={gameSettings.boardSize} />
        </div>
    )
}

export default Game;