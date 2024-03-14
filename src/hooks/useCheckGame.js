import { useEffect } from "react";
import { calculateWinner } from "../utils/calculateWinner";

export const useCheckGame = (processGame, setProcessGame, gameSettings) => {
    useEffect(() => {
        const checkGame = () => {
            const winner = calculateWinner(processGame.board);
            if (winner) {
                setProcessGame(prev => ({
                    ...prev,
                    winLine: winner[1],
                    winner: !prev.xIsNext ? gameSettings.playersName.name1 : gameSettings.playersName.name2,
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