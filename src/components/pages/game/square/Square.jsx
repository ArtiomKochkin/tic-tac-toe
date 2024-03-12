import styles from "./Square.module.scss";

const Square = () => {
    return (
        <td className={styles.square}>
            <div className={styles.square__choice}>
                <img src="./img/circle.svg" alt="" />
            </div>
        </td>
    )
}

export default Square;