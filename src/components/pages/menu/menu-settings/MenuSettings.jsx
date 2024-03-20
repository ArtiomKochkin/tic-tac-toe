import { useNavigate } from 'react-router-dom';
import useDefaultNames from '../../../../hooks/useDefaultNames';
import { useSettings } from '../../../../hooks/useSettings';
import { gameModes, boardSizes } from "../../../../data/settingsGame";
import MenuSelect from '../menu-select/MenuSelect';
import Input from '../../../UI/input/Input';
import Button from '../../../UI/button/Button';
import styles from '../Menu.module.scss';

const MenuSettings = ({ ...props}) => {
    const {gameSettings, setGameSettings} = useSettings();
    const { checkNames } = useDefaultNames();
    const nav = useNavigate();

    const applySettings = (event) => {
        event.preventDefault();
        nav("/game");
        checkNames();
    }

    const getSelectValue = (options, currentOption) => {
        return currentOption ? options.find(opt => opt.value === currentOption) : "";
    }

    return (
        <form {...props} onSubmit={applySettings}>
            <MenuSelect
                labelText="Режим игры"
                options={gameModes}
                value={getSelectValue(gameModes, gameSettings.gameMode.value)}
                onChange={(newValue) => setGameSettings(prev => ({
                    ...prev,
                    gameMode: newValue,
                    playersName: {
                        name1: "", 
                        name2: "" 
                    },
                }))}
            />
            <MenuSelect
                labelText="Размер доски"
                options={boardSizes} 
                value={getSelectValue(boardSizes, gameSettings.boardSize.value)}
                onChange={(newValue) => setGameSettings(prev => ({
                    ...prev,
                    boardSize: newValue
                }))}
            />
            <div className={styles.menu__fields}>
                {gameSettings.gameMode.value === "bot"
                    ? <>
                        <Input
                            placeholder="Введите имя игрока"
                            value={gameSettings.playersName.name1} 
                            onChange={e => setGameSettings(prev => ({
                                ...prev,
                                playersName: { 
                                    ...prev.playersName, name1: e.target.value 
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
                                    ...prev.playersName, name1: e.target.value
                                }
                            }))}
                        />
                        <Input
                            placeholder="Введите имя 2 игрока"
                            value={gameSettings.playersName.name2} 
                            onChange={e => setGameSettings(prev => ({
                                ...prev,
                                playersName: { 
                                    ...prev.playersName, name2: e.target.value 
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