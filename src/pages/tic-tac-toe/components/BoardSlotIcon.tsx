import { MdOutlineClear } from "react-icons/md";
import { memo } from "react";
import { BsCircle } from "react-icons/bs";
import { AcceptedTypes } from "../interfaces/ttt-game.interface";

const BoardSlotIcon = memo(({ val }: { val?: AcceptedTypes }) =>
  !val ? null : val === "x" ? (
    <MdOutlineClear size={24} />
  ) : (
    <BsCircle size={24} />
  )
);

export default BoardSlotIcon;
