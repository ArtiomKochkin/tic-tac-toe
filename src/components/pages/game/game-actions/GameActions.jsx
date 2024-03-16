import { useNavigate } from "react-router-dom";
import { useSettings } from "../../../../hooks/useSettings";
import { useProcessGameData } from "../../../../hooks/useProcessGameData";
import GameButtons from "./game-buttons/GameButtons";
import GameResult from "./game-result/GameResult";
import NextMove from "./next-move/NextMove";
import styles from "./GameActions.module.scss";

const GameActions = ({ hasResult, nextPlayer, winner, setProcessGame }) => {
    const nav = useNavigate();
    const {gameSettings, setGameSettings} = useSettings();
    const initialProcessGame = useProcessGameData();

    const goToMenu = () => {
        nav("/");
        setGameSettings(prev => ({
            ...prev,
            playersName: {
                name1: "", name2: ""
            }
        }));
    }

    const resetBoard = () => {
        setProcessGame(prev => ({
            ...initialProcessGame,
            score: { ...prev.score }
        }));
    }

    return (
        <div className={styles.actions}>
            {hasResult 
                ? <>
                    <GameResult winner={winner} className={styles.actions__text}/>
                    <GameButtons resetBoard={resetBoard} goToMenu={goToMenu} className={styles.actions__buttons}/>
                </>
                : <NextMove player={nextPlayer} className={styles.actions__text}/>
            }
        </div>
    )
}

export default GameActions;