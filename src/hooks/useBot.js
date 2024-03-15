import { useEffect } from "react";
import { makeBotMove } from "../utils/makeBotMove";

export const useBot = (processGame, setProcessGame, gameSettings) => {
    useEffect(() => {
        // Если следующий игрок - бот, делаем его ход
        if (gameSettings.gameMode === "bot" && !processGame.xIsNext && !processGame.winLine) {
            const botMove = makeBotMove(processGame.board, processGame.xIsNext, gameSettings);
            setProcessGame(prev => ({
                ...prev,
                board: botMove,
                countMove: prev.countMove + 1,
                nextPlayer: gameSettings.playersName.name2, // Предположим, что бот всегда ходит вторым
                xIsNext: !prev.xIsNext
            }));
        }
    }, [processGame, setProcessGame, gameSettings]);
}