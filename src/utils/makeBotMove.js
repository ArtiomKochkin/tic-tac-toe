import { minimax } from "./minimax";

export const makeBotMove = (board, xIsNext, gameSettings, setProcessGame) => {
    const newBoard = [...board];
    const botMove = minimax(newBoard, 0, false, gameSettings.boardSize.value);
    
    newBoard[botMove.index] = xIsNext ? "cross" : "circle";
    setProcessGame(prev => ({
        ...prev,
        board: newBoard,
        countMove: prev.countMove + 1,
        nextPlayer: gameSettings.playersName.name1,  
        xIsNext: !prev.xIsNext
    }));
}