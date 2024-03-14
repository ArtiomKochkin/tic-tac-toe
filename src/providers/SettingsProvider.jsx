import { createContext, useEffect, useState } from "react";
import { gameModes, boardSizes } from "../data/settingsGame";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [gameSettings, setGameSettings] = useState(() => {
        const storedSettings = localStorage.getItem("gameSettings");
        return storedSettings ? JSON.parse(storedSettings) : {
            gameMode: gameModes[0].value, 
            boardSize: boardSizes[0].value, 
            playersName: { 
                name1: "", 
                name2: "" 
            }
        };
    });

    useEffect(() => {
        localStorage.setItem("gameSettings", JSON.stringify(gameSettings));
    }, [gameSettings]);

    return (
        <SettingsContext.Provider value={{ gameSettings, setGameSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

