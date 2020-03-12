import { IDispatch, AppState } from "../types";
import { OverlaysActions, Overlay } from "./types";

export function addOverlay(overlay: Overlay) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { overlays } = getState();

    dispatch({
      type: OverlaysActions.REPLACE_ALL,
      payload: overlays.concat(overlay)
    });
  };
}

export function removeOverlay(overlayID: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { overlays } = getState();

    dispatch({
      type: OverlaysActions.REPLACE_ALL,
      payload: overlays.filter((overlay: Overlay) => overlay.id !== overlayID)
    });
  };
}
