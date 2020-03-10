import { NotesGroups, DEFAULT_NOTES_GROUPS_STATE, NotesGroupsActions } from "./types";

export default function groupsReducer(
  state: NotesGroups = DEFAULT_NOTES_GROUPS_STATE,
  action: any
) {
  switch (action.type) {
    case NotesGroupsActions.REPLACE:
      return { ...state, [action.payload.id]: action.payload };
    case NotesGroupsActions.REPLACE_ALL:
      return { ...action.payload };
    default:
      return state;
  }
}
