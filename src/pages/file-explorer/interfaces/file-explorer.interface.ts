export type ItemTypes = "folder" | "file";
export type FolderBase = {
    id: string;
    type: ItemTypes;
    name: string;
    children?: FolderBase[];
};
export type AddItemToExplorer = (parentId: string, item: FolderBase) => void;