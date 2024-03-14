import Header from "./header/Header";
import styles from "./Game.module.scss";
import GameActions from "./game-actions/GameActions";
import Board from "./board/Board";
import { useState } from "react";
import { useSettings } from "../../../hooks/useSettings";
import { useCheckGame } from "../../../hooks/useCheckGame";

const Game = () => {
    const {gameSettings} = useSettings();
    const initialProcessGame = {
        board: Array(Math.pow(gameSettings.boardSize, 2)).fill(null),
        xIsNext: true,
        nextPlayer: gameSettings.playersName.name1,
        winner: "",
        winLine: null,
        countMove: 0
    };
    const [processGame, setProcessGame] = useState(initialProcessGame);
    
    useCheckGame(processGame, setProcessGame, gameSettings);

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

    return (
        <div className={styles.game}>
            <Header names={Object.values(gameSettings.playersName)}/>
            <GameActions 
                hasResult={processGame.winLine}
                winner={processGame.winner}
                nextPlayer={processGame.nextPlayer}
                resetBoard={() => setProcessGame(initialProcessGame)}
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

// добавить функционал для ведения счета 
// адаптировать для игры 5х5
// создать функционал и адаптацию для игры с ботом

// проверить render ли компоненты лишний раз 
// оптимизировать код
// адаптивная верстка