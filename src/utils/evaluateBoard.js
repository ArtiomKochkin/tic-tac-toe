import { calculateWinner3x3, calculateWinner5x5 } from "./calculateWinner"

export const evaluateBoard = (board, boardSize) => {
    const winner = boardSize === "3" ? calculateWinner3x3(board) : calculateWinner5x5(board);
    if (winner) {
        return winner[0] === "cross" ? 10 : -10;
    }
    return 0;
}