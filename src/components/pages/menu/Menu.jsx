import Button from "../../UI/button/Button";
import styles from "./Menu.module.scss";
import MenuSettings from "./menu-settings/MenuSettings";

const Menu = () => {

    return (
        <div className={styles.menu}>
            <h1>Крестики-нолики</h1>
            <MenuSettings className={styles.menu__settings} />
            <Button type="button">Играть</Button>
        </div>
    )
}

export default Menu;