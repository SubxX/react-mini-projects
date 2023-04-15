import { nanoid } from "nanoid";
import { FolderBase } from "../interfaces/file-explorer.interface";

export const defaultExplorerData: FolderBase = {
    id: nanoid(),
    type: "folder",
    name: "My folder",
    children: [
        {
            id: nanoid(),
            type: "file",
            name: "a.txt",
        },
        {
            id: nanoid(),
            type: "file",
            name: "test.txt",
        },
        {
            id: nanoid(),
            type: "file",
            name: "passwords.txt",
        },
        {
            id: nanoid(),
            type: "folder",
            name: "Inner Folder",
            children: [],
        },
    ],
}