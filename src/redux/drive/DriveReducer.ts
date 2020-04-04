import { IFileSystem, DriveActionTypes } from './DriveTypes';
import FileSystemState from './FileSystemState';
import { combineReducers } from 'redux';

interface Action {
    type: DriveActionTypes,
    payload: any
}

function FileSystemReducer(state: IFileSystem = FileSystemState, action: Action): IFileSystem {
    const {type, payload} = action;

    switch (type) {
        default: return state;
    }
}

function CurrentWorkingDirectoryReducer(state: string = '~', action: any): string {
    const {type, payload} = action;

    switch (type) {
        default: return state;
    }
}

export default combineReducers({
    cwd: CurrentWorkingDirectoryReducer,
    fs: FileSystemReducer
});
