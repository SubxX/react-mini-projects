import {
  AddItemToExplorer,
  FolderBase,
  ItemTypes,
} from "../interfaces/file-explorer.interface";
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { useState, KeyboardEvent, MouseEvent } from "react";
import { nanoid } from "nanoid";
import ExplorerItemFactory from "./ExplorerItemFactory";

type Props = {
  item: FolderBase;
  addItem: AddItemToExplorer;
};
const FolderRenderer = ({ item, addItem }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [type, setType] = useState<ItemTypes>();
  const [inputText, setInputText] = useState("");

  const handleAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    addItem(item.id, {
      id: nanoid(),
      type: type as ItemTypes,
      name: inputText,
    });
    closeInput();
  };
  const showInput = (e: MouseEvent<HTMLButtonElement>, type: ItemTypes) => {
    e.stopPropagation();
    setType(type);
  };
  const closeInput = () => {
    setType(undefined);
    setInputText("");
  };

  return (
    <div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={setIsExpanded.bind(this, !isExpanded)}
      >
        {isExpanded ? <AiFillFolderOpen /> : <AiFillFolder />}

        <span className="flex-1">{item.name}</span>
        <div className="space-x-1">
          <button
            className="icon-btn btn-default !p-1.5"
            onClick={(e) => showInput(e, "file")}
          >
            <AiOutlineFileAdd />
          </button>
          <button
            className="icon-btn btn-default !p-1.5"
            onClick={(e) => showInput(e, "folder")}
          >
            <AiOutlineFolderAdd />
          </button>
        </div>
      </div>

      {Boolean(type) && (
        <input
          type="text"
          placeholder="Enter name"
          autoFocus
          className="w-full my-2 px-4 py-1 custom-bg custom-border block focus:outline-none focus:ring-1 rounded-full text-sm"
          onBlur={closeInput}
          value={inputText}
          onKeyDown={handleAddItem}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}
      {isExpanded && (
        <div className="pl-2">
          {item?.children?.map((child) => (
            <ExplorerItemFactory
              key={child.id}
              item={child}
              addItem={addItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderRenderer;
