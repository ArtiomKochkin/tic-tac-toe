import { useEffect } from "react";
import { calculateWinner3x3, calculateWinner5x5 } from "../utils/calculateWinner";

export const useCheckGame = (processGame, setProcessGame, gameSettings) => {
    useEffect(() => {
        const checkGame = () => {
            const winner = gameSettings.boardSize === "3" 
                ? calculateWinner3x3(processGame.board) 
                : calculateWinner5x5(processGame.board)
            ;
            
            if (winner) {
                setProcessGame(prev => ({
                    ...prev,
                    winLine: winner[1],
                    winner: !prev.xIsNext ? gameSettings.playersName.name1 : gameSettings.playersName.name2,
                    score: {
                        left: !prev.xIsNext ? prev.score.left + 1 : prev.score.left,
                        right: prev.xIsNext ? prev.score.right + 1 : prev.score.right
                    }
                }));
                return;
            } else if (processGame.countMove === Math.pow(gameSettings.boardSize, 2)) {
                setProcessGame(prev => ({
                    ...prev,
                    winLine: [],
                    winner: "не определен (ничья)",
                }));
            }
        }
        checkGame();
    }, [processGame.board, processGame.countMove, gameSettings.boardSize, gameSettings.playersName, setProcessGame]);
}