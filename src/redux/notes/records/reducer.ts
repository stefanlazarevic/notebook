import {
  NotesRecords,
  NotesRecordsActions,
  DEFAULT_RECORDS_STATE
} from "./types";

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
    default:
      return state;
  }
}
