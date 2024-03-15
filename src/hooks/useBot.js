import { useEffect } from "react";
import { makeBotMove } from "../utils/makeBotMove";

export const useBot = (processGame, setProcessGame, gameSettings) => {
    useEffect(() => {
        if (gameSettings.gameMode === "bot" && !processGame.xIsNext && !processGame.winLine) {
            const botMove = makeBotMove(processGame.board, processGame.xIsNext, gameSettings);
            setProcessGame(prev => ({
                ...prev,
                board: botMove,
                countMove: prev.countMove + 1,
                nextPlayer: gameSettings.playersName.name1,  
                xIsNext: !prev.xIsNext
            }));
        }
    }, [processGame, setProcessGame, gameSettings]);
}