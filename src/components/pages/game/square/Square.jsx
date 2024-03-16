import styles from "./Square.module.scss";

const Square = ({ onClick, value, isWinner }) => {
    return (
        <div 
            className={`${styles.square} ${isWinner && styles.winner}`} 
            onClick={onClick}
        >
            {value !== null && 
                <img src={`./img/${value}.svg`} alt={value} />
            }
        </div>
    )
}

export default Square;