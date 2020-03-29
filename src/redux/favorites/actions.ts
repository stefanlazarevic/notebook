import { IDispatch, AppState } from "../types";
import { FavoriteActions } from "./types";

export function addToFavorites(id: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[id];

    if (!group) {
      throw Error(`Folder with id ${id} is absent.`);
    }

    dispatch({
      type: FavoriteActions.ADD,
      payload: {
        id
      }
    });
  };
}

export function removeFromFavorites(id: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[id];

    if (!group) {
      throw Error(`Folder with id ${id} is absent.`);
    }

    dispatch({
      type: FavoriteActions.REMOVE,
      payload: {
        id
      }
    });
  };
}
