import { evaluateBoard } from "./evaluateBoard";

const maximizingPlayer = {
    bestScore: -Infinity,
    square: 'cross',
    isMaxPlayer: false
};
const minimizingPlayer = {
    bestScore: Infinity,
    square: 'circle',
    isMaxPlayer: true
};

export const minimax = (board, depth, isMaximizingPlayer, boardSize) => {
    const score = evaluateBoard(board, boardSize);

    if (score !== 0 || depth === 3) {
        return { score };
    }

    const minimaxDecision = (player) => {
        let bestScore = player.bestScore;
        let bestIndex = null;

        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                board[i] = player.square;
                const { score } = minimax(board, depth + 1, player.isMaxPlayer, boardSize);
                const condition = player === maximizingPlayer ? score > bestScore : score < bestScore;

                board[i] = null;
                if (condition) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
        return { score: bestScore, index: bestIndex };
    }

    if (isMaximizingPlayer) {
        return minimaxDecision(maximizingPlayer);
    } else {
        return minimaxDecision(minimizingPlayer);
    }
};