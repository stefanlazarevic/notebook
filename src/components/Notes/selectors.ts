import { AppState } from "../../redux/types";
import { NoteGroupID } from "../../redux/notes/groups/types";

export function getGroupChildren(state: AppState, id: NoteGroupID) {
  return state.notes.groups[id].children;
}
