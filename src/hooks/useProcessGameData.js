import { useSettings } from "./useSettings";

export const useProcessGameData = () => {
    const { gameSettings } = useSettings();
    const initialProcessGame = {
        board: Array(Math.pow(gameSettings.boardSize.value, 2)).fill(null),
        xIsNext: true,
        nextPlayer: gameSettings.playersName.name1,
        winner: "",
        winLine: null,
        countMove: 0,
        score: {
            left: 0,
            right: 0
        }
    }

    return initialProcessGame;
}