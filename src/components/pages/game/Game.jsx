import Header from "./header/Header";
import styles from "./Game.module.scss";
import GameActions from "./game-actions/GameActions";
import Board from "./board/Board";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../../providers/SettingsProvider";
import { calculateWinner } from "../../../utils/calculateWinner";

const Game = () => {
    const {gameSettings} = useContext(SettingsContext);
    const [isResult, setIsResult] = useState(false);
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState("");
    const [winLine, setWinLine] = useState(null);
    const [countMove, setCountMove] = useState(1);
    const [nextPlayer, setNextPlayer] = useState(gameSettings.playersName.name1);
    const [board, setBoard] = useState(
        Array(Math.pow(gameSettings.boardSize, 2)).fill(null)
    );
    
    useEffect(() => {
        const checkGame = () => {
            const winner = calculateWinner(board);
            if (winner) {
                setWinLine(winner[1]);
                setIsResult(true);
                setWinner(!xIsNext ? gameSettings.playersName.name1 : gameSettings.playersName.name2);

                return;
            } else if (countMove === Math.pow(gameSettings.boardSize, 2)) {
                setIsResult(true);
                setWinner("не определен (ничья)");
            }
        }
        checkGame();
    }, [board]);

    const handleClick = (i) => {
        const newBoard = [...board];
        if (newBoard[i]) return;

        newBoard[i] = xIsNext ? "cross" : "circle";
        setNextPlayer(!xIsNext ? gameSettings.playersName.name1 : gameSettings.playersName.name2);
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setCountMove(countMove + 1);
    }
    
    
    const resetBoard = () => {
        setBoard(Array(Math.pow(gameSettings.boardSize, 2)).fill(null));
        setIsResult(false);
        setCountMove(0);
        setWinner("");
        setWinLine(null);
    }

    return (
        <div className={styles.game}>
            <Header names={Object.values(gameSettings.playersName)}/>
            <GameActions 
                isResult={isResult}
                winner={winner}
                nextPlayer={nextPlayer}
                resetBoard={resetBoard}
            />
            <Board 
                board={board}
                onClick={handleClick}
                winLine={winLine}
            />
        </div>
    )
}

export default Game;

// оптимизировать код
// адаптировать для игры 5х5
// создать функционал и адаптацию для игры с ботом
// можно добавить функционал для ведения счета 
// оптимизировать код
// адаптивная верстка