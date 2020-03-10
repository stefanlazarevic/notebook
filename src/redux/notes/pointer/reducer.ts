import { NotesPointerActions } from "./types";
import { NoteGroupID } from "../groups/types";

export default function groupReducer(state: NoteGroupID = "root", action: any) {
  switch (action.type) {
    case NotesPointerActions.REPLACE:
      return action.payload;
    default:
      return state;
  }
}
