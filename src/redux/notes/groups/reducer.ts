import {
  NotesGroups,
  DEFAULT_NOTES_GROUPS_STATE,
  NotesGroupsActions
} from "./types";
import { NotesActions } from "../types";

export default function groupsReducer(
  state: NotesGroups = DEFAULT_NOTES_GROUPS_STATE,
  action: any
) {
  switch (action.type) {
    case NotesGroupsActions.REPLACE:
      return { ...state, [action.payload.id]: action.payload };
    case NotesGroupsActions.REPLACE_ALL:
      return { ...action.payload };
    // New
    case NotesActions.CREATE_RECORD:
      return {
        ...state,
        [action.payload.parent]: {
          ...state[action.payload.parent],
          children: state[action.payload.parent].children.concat(
            action.payload.id
          )
        }
      };
    case NotesActions.REMOVE_RECORD:
      return {
        ...state,
        [action.payload.parent]: {
          ...state[action.payload.parent],
          children: state[action.payload.parent].children.filter(
            id => id !== action.payload.id
          )
        }
      };
    case NotesActions.CREATE_GROUP:
      return {
        ...state,
        [action.payload.parent]: {
          ...state[action.payload.parent],
          children: state[action.payload.parent].children.concat(
            action.payload.id
          )
        },
        [action.payload.id]: {
          ...action.payload
        }
      };
    default:
      return state;
  }
}
