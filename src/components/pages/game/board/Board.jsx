import Square from "../square/Square";
import styles from "./Board.module.scss";

const Board = ({ board, onClick, winLine }) => {

    return (
        <div className={styles.board}>
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