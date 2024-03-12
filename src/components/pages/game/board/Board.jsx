import Square from "../square/Square";
import styles from "./Board.module.scss";

const Board = ({ size }) => {
    const squaresColumn = Array.from({ length: size });
    const squaresRow = Array.from({ length: size });

    return (
        <table className={styles.board}>
            <tbody>
                {squaresRow.map((row, i) => {
                    return <tr key={i}>
                        {squaresColumn.map((column, i) =>
                            <Square key={i}/>
                        )}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Board;