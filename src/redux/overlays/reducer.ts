import { OverlaysActions, OverlayState } from "./types";

export default function overlaysReducer(state: OverlayState = [], action: any) {
  switch (action.type) {
    case OverlaysActions.REPLACE_ALL:
      return [...action.payload];
    default:
      return state;
  }
}
