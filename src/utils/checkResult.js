import { calculateWinner3x3, calculateWinner5x5 } from "./calculateWinner";

export const checkResult = (processGame, setProcessGame, gameSettings) => {
    if (!processGame.winLine) {
        const winner = gameSettings.boardSize === "3" 
            ? calculateWinner3x3(processGame.board) 
            : calculateWinner5x5(processGame.board)
        ;

        if (winner) {
            const winPlayer = winner[0] === "cross" ? gameSettings.playersName.name1 : gameSettings.playersName.name2;
            const isWinFirstPlayer = winPlayer === gameSettings.playersName.name1;
            
            setProcessGame(prev => ({
                ...prev,
                winLine: winner[1],
                winner: winPlayer,
                score: {
                    ...prev.score,
                    [isWinFirstPlayer ? "left" : "right"]: prev.score[isWinFirstPlayer ? "left" : "right"] + 1
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
}