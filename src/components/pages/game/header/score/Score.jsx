import styles from "./Score.module.scss";

const Score = ({ score }) => {
    return (
        <div className={styles.score}>
            {score.left} : {score.right}
        </div>
    )
}

export default Score;