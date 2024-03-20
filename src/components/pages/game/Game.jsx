import { useEffect, useState } from "react";
import { useProcessGameData } from "../../../hooks/useProcessGameData";
import { useSettings } from "../../../hooks/useSettings";
import { makeBotMove } from "../../../utils/makeBotMove";
import { checkResult } from "../../../utils/checkResult";
import GameActions from "./game-actions/GameActions";
import Header from "./header/Header";
import Board from "./board/Board";
import styles from "./Game.module.scss";

const Game = () => {
    const { gameSettings } = useSettings();
    const initialProcessGame = useProcessGameData();
    const [processGame, setProcessGame] = useState(initialProcessGame);
    
    const handleClick = (i) => {
        const newBoard = [...processGame.board];

        if (newBoard[i] || processGame.winLine) return;
        newBoard[i] = processGame.xIsNext ? "cross" : "circle";
        setProcessGame(prev => ({
            ...prev,
            nextPlayer: !prev.xIsNext ? gameSettings.playersName.name1 : gameSettings.playersName.name2,
            board: newBoard,
            xIsNext: !prev.xIsNext,
            countMove: prev.countMove + 1,
        }));
    }

    useEffect(() => {
        checkResult(processGame, setProcessGame, gameSettings);
        if (gameSettings.gameMode.value === "bot" && !processGame.xIsNext && !processGame.winLine) {
            makeBotMove(processGame.board, processGame.xIsNext, gameSettings, setProcessGame);
        }
    }, [processGame, gameSettings]);

    return (
        <div className={styles.game}>
            <Header 
                names={Object.values(gameSettings.playersName)}
                score={processGame.score}
            />
            <GameActions 
                hasResult={processGame.winLine}
                winner={processGame.winner}
                nextPlayer={processGame.nextPlayer}
                setProcessGame={setProcessGame}
            />
            <Board 
                board={processGame.board}
                onClick={handleClick}
                winLine={processGame.winLine}
            />
        </div>
    )
}

export default Game;