import { TabState, TabActions, DEFAULT_TAB_STATE } from "./types";
import { NotesActions } from "../notes/types";
import utils from "../../utils";
import { DriveActionTypes } from "../drive/DriveTypes";

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
    case DriveActionTypes.OPEN_DIRECTORY:
      return {
        ...state,
        records: utils.array.replaceAtIndex(
          state.currentTabIndex,
          state.records,
          action.payload
        )
      };
    case DriveActionTypes.OPEN_ROOT_DIRECTORY:
      return {
        ...state,
        records: utils.array.replaceAtIndex(
          state.currentTabIndex,
          state.records,
          '~'
        )
      }
    case DriveActionTypes.OPEN_TRASH_DIRECTORY:
        return {
          ...state,
          records: utils.array.replaceAtIndex(
            state.currentTabIndex,
            state.records,
            '~/Trash'
          )
        }
    case NotesActions.REMOVE_GROUP:
      return {
        ...state,
        records: action.payload.records
      };
    default:
      return state;
  }
}
