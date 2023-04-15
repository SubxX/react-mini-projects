import { AiOutlineFileText } from "react-icons/ai";
import {
  AddItemToExplorer,
  FolderBase,
} from "../interfaces/file-explorer.interface";
import FolderRenderer from "./FolderRenderer";

const ExplorerItemFactory = ({
  item,
  addItem,
}: {
  item: FolderBase;
  addItem: AddItemToExplorer;
}) => {
  if (item.type === "file")
    return (
      <div className="flex items-center gap-2">
        <AiOutlineFileText />
        <span className="flex-1">{item.name}</span>
      </div>
    );

  return <FolderRenderer item={item} addItem={addItem} />;
};

export default ExplorerItemFactory;
