import { NoteGroupID } from "../groups/types";
import { NotesActions } from "../types";
import { TabActions } from "../../tabs/types";

export default function groupReducer(state: NoteGroupID = "root", action: any) {
  switch (action.type) {
    case NotesActions.OPEN_GROUP:
      return action.payload;
    case TabActions.CREATE_TAB:
      return action.payload.id;
    case TabActions.OPEN_TAB:
      return action.payload.id;
    case TabActions.CLOSE_TAB:
      return action.payload.id;
    default:
      return state;
  }
}
