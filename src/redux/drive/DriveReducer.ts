import { IDrive, DriveActionTypes } from './DriveTypes';
import DriveState from './DriveState';
import { combineReducers } from 'redux';

interface Action {
    type: DriveActionTypes,
    payload: any
}

function DriveReducer(state: IDrive = DriveState, action: Action): IDrive {
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
    drive: DriveReducer
});
