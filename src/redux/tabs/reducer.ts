import { TabState, TabActions, DEFAULT_TAB_STATE } from "./types";
import { NotesActions } from "../notes/types";
import utils from "../../utils";

export default function tabReducer(
  state: TabState = DEFAULT_TAB_STATE,
  action: any
) {
  switch (action.type) {
    case TabActions.CREATE_TAB:
      return {
        currentTabIndex: action.payload.currentTabIndex,
        records: action.payload.records
      };
    case TabActions.OPEN_TAB:
      return {
        ...state,
        currentTabIndex: action.payload.currentTabIndex
      };
    case TabActions.CLOSE_TAB:
      return {
        currentTabIndex: action.payload.currentTabIndex,
        records: action.payload.records
      };
    case TabActions.REPLACE:
      return {
        currentTabIndex: action.payload.currentTabIndex,
        records: action.payload.records.slice()
      };
    case NotesActions.OPEN_GROUP:
      return {
        ...state,
        records: utils.array.replaceAtIndex(
          state.currentTabIndex,
          state.records,
          action.payload
        )
      };
    default:
      return state;
  }
}
