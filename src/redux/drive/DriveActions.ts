import { IDispatch, AppState } from "../types";

export function createDirectory(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function openDirectory(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function openParentDirectory(path?: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function openRootDirectory() {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function openTrashDirectory() {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function move(sourcePath: string, destinationPath: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function moveToParent(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function moveToRoot(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function moveToTrash(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function rename(path: string, name: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
}

export function remove(path: string) {
    return async (dispatch: IDispatch, getState: () => AppState) => {

    }
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
}
