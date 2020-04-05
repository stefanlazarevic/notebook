import { IFileSystem, FileSystemTypes } from "./DriveTypes";

const FileSystemState: IFileSystem = {
    '~': {
        path: '~',
        children: [],
        type: FileSystemTypes.DIRECTORY,
        createdAt: Date.now(),
    },
    '~/Trash': {
        path: '~/Trash',
        children: [],
        type: FileSystemTypes.DIRECTORY,
        createdAt: Date.now(),
    }
}

export default FileSystemState;
