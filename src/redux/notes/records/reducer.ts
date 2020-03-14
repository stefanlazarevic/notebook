import { NotesRecords, DEFAULT_RECORDS_STATE } from "./types";
import { NotesActions } from "../types";
import utils from "../../../utils";

export default function recordsReducer(
  state: NotesRecords = DEFAULT_RECORDS_STATE,
  action: any
): NotesRecords {
  switch (action.type) {
    case NotesActions.CREATE_RECORD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      };
    case NotesActions.REMOVE_RECORD:
      return utils.object.deleteProperty(action.payload.id, state);
    case NotesActions.UPDATE_RECORD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      };
    default:
      return state;
  }
}
