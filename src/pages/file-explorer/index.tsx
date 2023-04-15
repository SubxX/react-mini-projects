import ExplorerItemFactory from "./components/ExplorerItemFactory";
import useExplorerState from "./hooks/useExplorerState";
import Dropdown from "@/components/Dropdown";

const FileExplorer = () => {
  const [folderTree, addItem] = useExplorerState();

  return (
    <div className="flex gap-2">
      <div className="h-screen w-60 border-r border-white border-opacity-10 overflow-y-auto p-2">
        <ExplorerItemFactory item={folderTree} addItem={addItem} />
      </div>

      <div className="flex-1" />
    </div>
  );
};

export default FileExplorer;
