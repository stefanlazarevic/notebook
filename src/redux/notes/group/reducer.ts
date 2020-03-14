import { NoteGroupID } from "../groups/types";
import { NotesActions } from "../types";

export default function groupReducer(state: NoteGroupID = "root", action: any) {
  switch (action.type) {
    case NotesActions.OPEN_GROUP:
      return action.payload;
    default:
      return state;
  }
}
