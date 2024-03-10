import MenuSelect from "../menu-select/MenuSelect";
import Input from "../../../UI/input/Input";
import styles from "../Menu.module.scss";

const MenuSettings = ({ ...props}) => {
    const boardSizes = [
        { value: "3x3", name: "3x3 (классический)" },
        { value: "5x5", name: "5x5 (совместите 4 чтобы выиграть)" }
    ];

    const gameModes = [
        { value: "friend", name: "Игра с другом" },
        { value: "bot", name: "Игра против робота" }
    ];

    return (
        <div {...props}>
            <MenuSelect 
                className={styles.menu__select} 
                options={gameModes} 
                labelText="Режим игры"
            />
            <MenuSelect 
                className={styles.menu__select} 
                options={boardSizes} 
                labelText="Размер доски"
            />
            <div className={styles.menu__fields}>
                <Input type="text" placeholder="Введите имя 1 игрока" />
                <Input type="text" placeholder="Введите имя 2 игрока" />
            </div>
        </div>
    )
}

export default MenuSettings;