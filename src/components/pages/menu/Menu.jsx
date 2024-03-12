import styles from "./Menu.module.scss";
import MenuSettings from "./menu-settings/MenuSettings";

const Menu = () => {

    return (
        <div className={styles.menu}>
            <h1>Tic-tac-toe</h1>
            <MenuSettings className={styles.menu__settings} />
        </div>
    )
}

export default Menu;