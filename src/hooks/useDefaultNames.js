import { useSettings } from "./useSettings";

const useDefaultNames = () => {
    const {gameSettings, setGameSettings} = useSettings();

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
        const mode = gameSettings.gameMode;
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