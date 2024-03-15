import Square from "../square/Square";
import styles from "./Board.module.scss";

const Board = ({ board, onClick, winLine }) => {
    const boardSize5x5 = board.length === 25;
    
    return (
        <div className={`${styles.board} ${boardSize5x5 && styles.size5}`}>
            {board.map((square, i) =>
                <Square 
                    key={i} 
                    onClick={() => onClick(i)} 
                    value={square}
                    isWinner={winLine && winLine.includes(i)}
                />
            )}
        </div>
    )
}

export default Board;