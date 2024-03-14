import styles from "./Square.module.scss";

const Square = ({ onClick, value, isWinner }) => {
    const typeMove = value;

    return (
        <div 
            className={`${styles.square} ${isWinner && styles.winner}`} 
            onClick={onClick}
        >
            {typeMove !== null && 
                <img src={`./img/${typeMove}.svg`} alt={typeMove} />
            }
        </div>
    )
}

export default Square;