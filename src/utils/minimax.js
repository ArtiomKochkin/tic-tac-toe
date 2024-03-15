import { evaluateBoard } from "./evaluateBoard";


export const minimax = (board, depth, isMaximizingPlayer, boardSize) => {
    // Оцениваем текущее состояние игры
    const score = evaluateBoard(board, boardSize);
    // Если игра завершена или достигнута максимальная глубина рекурсии, возвращаем оценку
    if (score !== 0 || depth === 3) {
        return { score };
    }

    // Если это ход isMaximizingPlayer
    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        let bestIndex = null;
        // Проходим по всем доступным ходам
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                board[i] = 'cross'; // Предполагаем, что делаем ход крестиком
                // Рекурсивно вызываем минимакс для следующего хода
                const { score } = minimax(board, depth + 1, false, boardSize);
                // Отменяем ход
                board[i] = null;
                // Обновляем лучший результат
                if (score > bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
        return { score: bestScore, index: bestIndex };
    } 
    // Если это ход минимизирующего игрока
    else {
        let bestScore = Infinity;
        let bestIndex = null;
        // Проходим по всем доступным ходам
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                board[i] = 'circle'; // Предполагаем, что делаем ход ноликом
                // Рекурсивно вызываем минимакс для следующего хода
                const { score } = minimax(board, depth + 1, true, boardSize);
                // Отменяем ход
                board[i] = null;
                // Обновляем лучший результат
                if (score < bestScore) {
                    bestScore = score;
                    bestIndex = i;
                }
            }
        }
        return { score: bestScore, index: bestIndex };
    }
};