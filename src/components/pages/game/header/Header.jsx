import styles from "./Header.module.scss";
import HeaderPlayer from "./header-player/HeaderPlayer";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__players}>
                <HeaderPlayer player="x" names={["one", "two"]}/>
                <HeaderPlayer player="o" names={["one", "two"]}/>
            </div>
        </div>
    )
}

export default Header;