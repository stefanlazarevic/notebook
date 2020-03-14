import {
  NotesRecords,
  NotesRecordsActions,
  DEFAULT_RECORDS_STATE
} from "./types";
import { NotesActions } from "../types";
import utils from "../../../utils";

export default function recordsReducer(
  state: NotesRecords = DEFAULT_RECORDS_STATE,
  action: any
): NotesRecords {
  switch (action.type) {
    case NotesRecordsActions.REPLACE:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case NotesRecordsActions.REPLACE_ALL:
      return { ...action.payload };

    // New
    case NotesActions.INSERT_RECORD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      };
    case NotesActions.REMOVE_RECORD:
      return utils.object.deleteProperty(action.payload.id, state);
    default:
      return state;
  }
}
