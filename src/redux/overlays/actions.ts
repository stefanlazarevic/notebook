import { IDispatch, AppState } from "../types";
import { OverlaysActions, OverlayType } from "./types";
import utils from "../../utils";

export function showOverlay(type: OverlayType, props?: any) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: OverlaysActions.OPEN_OVERLAY,
      payload: {
        ...props,
        id: utils.string.generateRandom(3),
        type
      }
    });
  };
}

export function closeOverlay(id: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: OverlaysActions.CLOSE_OVERLAY,
      payload: id
    });
  };
}
