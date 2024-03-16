import HeaderPlayer from "./header-player/HeaderPlayer";
import Score from "./score/Score";
import styles from "./Header.module.scss";

const Header = ({ names, score }) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__players}>
                <HeaderPlayer player="x" names={names}/>
                <Score score={score}/>
                <HeaderPlayer player="o" names={names}/>
            </div>
        </div>
    )
}

export default Header;