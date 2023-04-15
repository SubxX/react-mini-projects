import { AcceptedTypes } from "../interfaces/ttt-game.interface";

export const boardDefaultValue = Array.from(new Array(9));
export const defaultTurn: AcceptedTypes = "x";

export const staticWinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];