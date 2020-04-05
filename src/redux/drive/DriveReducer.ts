import { IFileSystem, DriveActionTypes } from "./DriveTypes";
import FileSystemState from "./FileSystemState";
import { combineReducers } from "redux";
import { TabActions } from "../tabs/types";

interface Action {
  type: DriveActionTypes;
  payload: any;
}

function FileSystemReducer(
  state: IFileSystem = FileSystemState,
  action: Action
): IFileSystem {
  const { type, payload } = action;

  switch (type) {
    case DriveActionTypes.CREATE_DIRECTORY:
      return payload.fs;
    default:
      return state;
  }
}

function CurrentWorkingDirectoryReducer(
  state: string = "~",
  action: any
): string {
  const { type, payload } = action;

  switch (type) {
    case DriveActionTypes.OPEN_ROOT_DIRECTORY:
      return "~";
    case DriveActionTypes.OPEN_TRASH_DIRECTORY:
      return "Trash";
    case DriveActionTypes.OPEN_DIRECTORY:
      return payload;
    case TabActions.OPEN_TAB:
    case TabActions.CLOSE_TAB:
    case TabActions.CREATE_TAB:
    case TabActions.REPLACE:
      return payload.path;
    default:
      return state;
  }
}

export default combineReducers({
  cwd: CurrentWorkingDirectoryReducer,
  fs: FileSystemReducer
});
