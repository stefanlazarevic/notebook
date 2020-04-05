import { IDispatch, AppState } from "../types";
import { DriveActionTypes } from "./DriveTypes";
import FileSystem from "./FileSystem";

export function createDirectory(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { drive } = getState();

    const FS = FileSystem.fromFileSystem(drive.fs);

    try {
      FS.createDirectory(path);
    } catch (error) {
      console.error(error);
      return;
    }

    dispatch({
      type: DriveActionTypes.CREATE_DIRECTORY,
      payload: {
        fs: FS.toObject()
      }
    });
  };
}

export function openDirectory(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { drive } = getState();
    const { fs } = drive;

    if (fs[path]) {
      dispatch({
        type: DriveActionTypes.OPEN_DIRECTORY,
        payload: path
      });
    }
  };
}

export function openParentDirectory(path?: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function openRootDirectory() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: DriveActionTypes.OPEN_ROOT_DIRECTORY
    });
  };
}

export function openTrashDirectory() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: DriveActionTypes.OPEN_TRASH_DIRECTORY
    });
  };
}

export function move(sourcePath: string, destinationPath: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function moveToParent(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function moveToRoot(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function moveToTrash(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function rename(path: string, name: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export function remove(path: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {};
}

export default {
  createDirectory,
  openDirectory,
  openParentDirectory,
  openRootDirectory,
  openTrashDirectory,
  move,
  moveToParent,
  moveToRoot,
  moveToTrash,
  rename,
  remove
};
