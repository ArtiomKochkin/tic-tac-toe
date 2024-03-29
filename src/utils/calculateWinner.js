export const calculateWinner3x3 = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7],  [2, 5, 8],  [0, 4, 8], [2, 4, 6]
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], lines[i]];
        }
    }
    return null;
}

export const calculateWinner5x5 = (squares) => {
    const lines = [
        [0, 1, 2, 3], [1, 2, 3, 4], [5, 6, 7, 8],
        [6, 7, 8, 9], [10, 11, 12, 13],  [11, 12, 13, 14],
        [15, 16, 17, 18], [16, 17, 18, 19], [20, 21, 22, 23],
        [21, 22, 23, 24], [0, 5, 10, 15], [5, 10, 15, 20],
        [1, 6, 11, 16], [6, 11, 16, 21],  [2, 7, 12, 17],
        [7, 12, 17, 22], [3, 8, 13, 18], [8, 13, 18, 23],
        [4, 9, 14, 19], [9, 14, 19, 24],[0, 6, 12, 18], 
        [6, 12, 18, 24], [5, 11, 17, 23], [1, 7, 13, 19], 
        [4, 8, 12, 16], [8, 12, 16, 20], [3, 7, 11, 15], 
        [9, 13, 17, 21]
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return [squares[a], lines[i]];
        }
    }
    return null;
};