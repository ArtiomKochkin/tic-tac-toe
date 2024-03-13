import { useContext } from "react";
import { SettingsContext } from "../providers/SettingsProvider";

const useDefaultNames = () => {
    const {gameSettings, setGameSettings} = useContext(SettingsContext);

    const defaultNames = {
        bot: {
            "name1": "Игрок",
            "name2": "Бот"
        },
        friends: {
            "name1": "Игрок 1",
            "name2": "Игрок 2"
        }
    };

    const checkNames = () => {
        const mode = gameSettings.gameMode === "bot" ? "bot" : "friends";
        const namesToUpdate = {};

        for (let key in defaultNames[mode]) {
            if (gameSettings.playersName[key] === "") {
                namesToUpdate[key] = defaultNames[mode][key];
            }
        } 

        if (Object.keys(namesToUpdate).length > 0) {
            setGameSettings(prev => ({
                ...prev,
                playersName: {
                    ...prev.playersName,
                    ...namesToUpdate
                }
            }));
        }
    }

    return { checkNames }
}

export default useDefaultNames;