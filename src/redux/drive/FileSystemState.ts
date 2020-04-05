import { IFileSystem, FileSystemTypes } from "./DriveTypes";

const FileSystemState: IFileSystem = {
    '~': {
        path: '~',
        children: ['Documents'],
        type: FileSystemTypes.DIRECTORY,
        createdAt: Date.now(),
    },
    '~/Trash': {
        path: '~/Trash',
        children: [],
        type: FileSystemTypes.DIRECTORY,
        createdAt: Date.now(),
    },
    '~/Documents': {
        path: '~/Documents',
        children: [],
        type: FileSystemTypes.DIRECTORY,
        createdAt: Date.now()
    }
}

export default FileSystemState;
