import { useContext } from "react";
import Button from "../../../../UI/button/Button";
import { useNavigate } from "react-router-dom";
import { SettingsContext } from "../../../../../providers/SettingsProvider";

const GameButtons = ({ resetBoard, ...props}) => {
    const nav = useNavigate();
    const {gameSettings, setGameSettings} = useContext(SettingsContext);

    const handleMenuButtonClick = () => {
        nav("/");
        setGameSettings(prev => ({
            ...prev,
            playersName: {
                name1: "", name2: ""
            }
        }));
    }

    return (
        <div {...props}>
            <Button type="button" onClick={resetBoard}> Играть снова </Button>
            <Button type="button" onClick={handleMenuButtonClick}>Перейти в меню</Button>
        </div>
    )
}

export default GameButtons;