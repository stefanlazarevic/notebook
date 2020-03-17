import { PrintState } from "./types";

export default function printReducer(state: PrintState = [], action: any) {
  switch (action.type) {
    case "REPLACE":
      return [...action.payload.slice()];
    default:
      return state;
  }
}
