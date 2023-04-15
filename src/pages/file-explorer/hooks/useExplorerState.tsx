import { useCallback, useState } from "react";
import {
  FolderBase,
  AddItemToExplorer,
} from "../interfaces/file-explorer.interface";
import { defaultExplorerData } from "../data/static.data";

const useExplorerState = (): [FolderBase, AddItemToExplorer] => {
  const [explorerData, setExplorerData] =
    useState<FolderBase>(defaultExplorerData);

  const addItem = useCallback((parentId: string, neWItem: FolderBase) => {
    const checker = (tree: FolderBase) => {
      if (tree.id === parentId && tree.type === "folder") {
        tree.children = [neWItem, ...(tree.children ?? [])];
        return tree;
      }
      tree.children?.map((tc) => checker(tc));
    };

    setExplorerData((prev) => {
      const t = { ...prev };
      checker(t);
      return t;
    });
  }, []);

  return [explorerData, addItem];
};

export default useExplorerState;
