import { NotesGroups, DEFAULT_NOTES_GROUPS_STATE } from "./types";
import { NotesActions } from "../types";
import utils from "../../../utils";

export default function groupsReducer(
  state: NotesGroups = DEFAULT_NOTES_GROUPS_STATE,
  action: any
) {
  switch (action.type) {
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
        [action.payload.targetGroupID]: {
          ...state[action.payload.targetGroupID],
          children: state[action.payload.targetGroupID].children.concat(
            action.payload.id
          )
        },
        [action.payload.id]: {
          ...action.payload
        }
      };
    case NotesActions.UPDATE_GROUP:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      };
    case NotesActions.REMOVE_GROUP:
      return {
        ...utils.object.deleteProperty(action.payload.id, state),
        [action.payload.parentGroupId]: {
          ...state[action.payload.parentGroupId],
          children: state[action.payload.parentGroupId].children.filter(
            id => id !== action.payload.id
          )
        }
      };
    case NotesActions.MOVE_GROUP:
      return {
        ...action.payload
      };
    case NotesActions.MOVE_RECORD:
      return {
        ...state,
        [action.payload.targetGroupID]: {
          ...state[action.payload.targetGroupID],
          children: state[action.payload.targetGroupID].children.concat(
            action.payload.id
          )
        },
        [action.payload.parent]: {
          ...state[action.payload.parent],
          children: state[action.payload.parent].children.filter(
            id => id !== action.payload.id
          )
        }
      };
    case NotesActions.REORDER:
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
