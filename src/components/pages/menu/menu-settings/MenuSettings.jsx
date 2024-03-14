import { useNavigate } from 'react-router-dom';
import MenuSelect from '../menu-select/MenuSelect';
import Input from '../../../UI/input/Input';
import Button from '../../../UI/button/Button';
import styles from '../Menu.module.scss';
import { gameModes, boardSizes } from "../../../../data/settingsGame";
import useDefaultNames from '../../../../hooks/useDefaultNames';
import { useSettings } from '../../../../hooks/useSettings';

const MenuSettings = ({ ...props}) => {
    const {gameSettings, setGameSettings} = useSettings();
    const { checkNames } = useDefaultNames();
    const nav = useNavigate();

    const applySettings = (event) => {
        event.preventDefault();
        nav("/game");
        checkNames();
    }

    return (
        <form {...props} onSubmit={applySettings}>
            <MenuSelect
                options={gameModes}
                value={gameSettings.gameMode}
                onChange={(e) => setGameSettings(prev => ({
                    ...prev,
                    gameMode: e.target.value
                }))}
                labelText="Режим игры"
            />
            <MenuSelect
                options={boardSizes} 
                value={gameSettings.boardSize}
                onChange={(e) => setGameSettings(prev => ({
                    ...prev,
                    boardSize: e.target.value
                }))}
                labelText="Размер доски"
            />
            <div className={styles.menu__fields}>
                {gameSettings.gameMode === "bot"
                    ? <>
                        <Input
                            placeholder="Введите имя игрока"
                            value={gameSettings.playersName.name1} 
                            onChange={e => setGameSettings(prev => ({
                                ...prev,
                                playersName: { 
                                    ...prev.playersName, 
                                    name1: e.target.value 
                                }
                            }))}
                        />
                    </>
                    : <>
                        <Input
                            placeholder="Введите имя 1 игрока"
                            value={gameSettings.playersName.name1} 
                            onChange={e => setGameSettings(prev => ({
                                ...prev,
                                playersName: {
                                    ...prev.playersName, 
                                    name1: e.target.value
                                }
                            }))}
                        />
                        <Input
                            placeholder="Введите имя 2 игрока"
                            value={gameSettings.playersName.name2} 
                            onChange={e => setGameSettings(prev => ({
                                ...prev,
                                playersName: { 
                                    ...prev.playersName, 
                                    name2: e.target.value 
                                }
                            }))}
                        />
                    </>
                }
            </div>
            <Button>Играть</Button>
        </form>
    )
}

export default MenuSettings;