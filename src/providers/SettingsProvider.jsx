import { createContext, useEffect, useState } from "react";
import { gameModes, boardSizes } from "../components/pages/menu/data";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [initialized, setInitialized] = useState(false);
    const [gameSettings, setGameSettings] = useState({
        gameMode: gameModes[0].value, 
        boardSize: boardSizes[0].value, 
        playersName: { 
            name1: "", 
            name2: "" 
        }
    });

    useEffect(() => {
        const storedSettings = localStorage.getItem("gameSettings");
        if (storedSettings && !initialized) {
            setGameSettings(JSON.parse(storedSettings));
            setInitialized(true)
        }
    }, [initialized]);

    useEffect(() => {
        if (initialized) {
            localStorage.setItem("gameSettings", JSON.stringify(gameSettings));
        }
    }, [gameSettings, initialized]);

    return (
        <SettingsContext.Provider value={{ gameSettings, setGameSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

