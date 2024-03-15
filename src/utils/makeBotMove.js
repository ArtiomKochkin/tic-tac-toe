import { minimax } from "./minimax";

export const makeBotMove = (board, xIsNext, gameSettings) => {
    // Создаем копию доски
    const newBoard = [...board];
    // Используем алгоритм минимакса для определения оптимального хода
    const bestMove = minimax(newBoard, 0, true, gameSettings.boardSize);
    // Выполняем ход бота
    newBoard[bestMove.index] = xIsNext ? "cross" : "circle";
    return newBoard;
};