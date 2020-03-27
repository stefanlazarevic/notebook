import { IDispatch, AppState } from "../types";
import { OverlaysActions, OverlayType, OverlayID } from "./types";
import utils from "../../utils";

export function showOverlay(type: OverlayType, props?: any) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: OverlaysActions.OPEN_OVERLAY,
      payload: {
        ...props,
        overlayID: utils.string.generateRandom(3),
        type
      }
    });
  };
}

export function closeOverlay(overlayID: OverlayID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: OverlaysActions.CLOSE_OVERLAY,
      payload: overlayID
    });
  };
}
