import { minimax } from "./minimax";

export const makeBotMove = (board, xIsNext, gameSettings) => {
    const newBoard = [...board];
    const botMove = minimax(newBoard, 0, false, gameSettings.boardSize);
    newBoard[botMove.index] = xIsNext ? "cross" : "circle";
    return newBoard;
}