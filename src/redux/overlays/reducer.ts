import { OverlaysActions, OverlayState } from "./types";

export default function overlaysReducer(state: OverlayState = [], action: any) {
  switch (action.type) {
    case OverlaysActions.OPEN_OVERLAY:
      return [...state, action.payload];
    case OverlaysActions.CLOSE_OVERLAY:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
