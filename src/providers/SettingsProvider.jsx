import { createContext, useState } from "react";
import { gameModes, boardSizes } from "../components/pages/menu/data";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [gameSettings, setGameSettings] = useState({
        gameMode: gameModes[0].value, 
        boardSize: boardSizes[0].value, 
        playersName: { 
            name1: "", 
            name2: "" 
        }
    });
    return (
        <SettingsContext.Provider value={{ gameSettings, setGameSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}