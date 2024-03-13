import styles from "./Header.module.scss";
import HeaderPlayer from "./header-player/HeaderPlayer";

const Header = ({ names }) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__players}>
                <HeaderPlayer player="x" names={names}/>
                <HeaderPlayer player="o" names={names}/>
            </div>
        </div>
    )
}

export default Header;