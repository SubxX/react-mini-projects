import { useState, useEffect, useRef } from "react";
import { BiReset } from "react-icons/bi";
import { AcceptedTypes } from "./interfaces/ttt-game.interface";
import BoardSlotIcon from "./components/BoardSlotIcon";
import {
  boardDefaultValue,
  defaultTurn,
  staticWinPatterns,
} from "./config/ttt-game.config";

const TicTacToe = () => {
  const [boardData, setBoardData] = useState(() => boardDefaultValue);
  const [turn, setTurn] = useState<AcceptedTypes>(() => defaultTurn);
  const [winner, setWinner] = useState<AcceptedTypes | "draw">();
  const ref = useRef(false);

  const onTableItemClickHandler = (index: number) => {
    setBoardData((prev) => {
      const tmp = [...prev];
      tmp[index] = turn;
      return tmp;
    });
    setTurn((prev) => (prev === "o" ? "x" : "o"));
    ref.current = true;
  };

  const resetBoard = () => {
    setBoardData(boardDefaultValue);
    setTurn(defaultTurn);
    setWinner(undefined);
    ref.current = false;
  };

  useEffect(() => {
    if (!ref.current) return;

    for (let pattern of staticWinPatterns) {
      const [idx1, idx2, idx3] = pattern;
      if (
        boardData[idx1] &&
        boardData[idx1] === boardData[idx2] &&
        boardData[idx2] === boardData[idx3]
      ) {
        setWinner(boardData[idx1]);
      }
    }
    const hasRemainingSlot = boardData.some((val) => !val);
    if (!hasRemainingSlot) setWinner("draw");
  }, [boardData]);

  return (
    <div className="min-h-screen p-4 pb-20 lg:pb-4 flex items-center justify-center flex-col">
      <div className="w-full max-w-xs space-y-4">
        <div className={winner ? "opacity-30" : ""}>
          <div className="flex items-center justify-between w-full custom-bg custom-border pl-4 pr-2 py-2 rounded-lg">
            <h4 className="text-md font-medium text-gray-400">Current Turn</h4>
            <span>
              <BoardSlotIcon val={turn} />
            </span>
          </div>

          <div className="w-full rounded-lg custom-bg custom-border grid grid-cols-3 gap-2 p-2 mt-4">
            {boardData.map((itm, i) => (
              <button
                className="relative pb-[100%] custom-bg rounded-lg custom-border transition hover:bg-opacity-20"
                key={i}
                onClick={onTableItemClickHandler.bind(this, i)}
                disabled={itm || winner}
              >
                <span className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-2xl">
                  <BoardSlotIcon val={itm} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {Boolean(winner) && (
          <>
            {winner === "draw" ? (
              <div className="w-full custom-bg custom-border pl-4 pr-2 py-2 rounded-lg text-center">
                <h4 className="text-md font-medium">Seems like its a draw!</h4>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full custom-bg custom-border pl-4 pr-2 py-2 rounded-lg">
                <h4 className="text-md font-medium">Winner is</h4>
                <BoardSlotIcon val={winner} />
              </div>
            )}

            <div className="flex items-center justify-between w-full custom-bg custom-border pl-4 pr-2 py-2 rounded-full fixed bottom-4 left-2/4 transform -translate-x-2/4 max-w-xs backdrop-blur-xl">
              <h4 className="text-md font-medium">Reset board</h4>
              <button
                className="icon-btn btn-success !p-[5px]"
                onClick={resetBoard}
              >
                <BiReset />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
