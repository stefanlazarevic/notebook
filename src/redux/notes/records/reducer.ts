import { NotesRecords, NotesRecordsActions } from "./types";

export default function notesRecordsReducer(
  state: NotesRecords = {},
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
