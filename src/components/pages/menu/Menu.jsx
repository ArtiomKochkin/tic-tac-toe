import MenuSettings from "./menu-settings/MenuSettings";
import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <h1>Крестики-нолики</h1>
            <MenuSettings className={styles.menu__settings} />
        </div>
    )
}

export default Menu;