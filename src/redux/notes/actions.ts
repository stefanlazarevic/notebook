import { NoteGroupID } from "./groups/types";
import { IDispatch, AppState } from "../types";
import { NotesActions } from "./types";

/**
 * Navigate to the group.
 *
 * @param targetGroupID A group id which should be open.
 */
export function openGroup(targetGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesActions.OPEN_GROUP,
      payload: targetGroupID
    });
  };
}

/**
 * Navigate to the parent group.
 *
 * @param sourceGroupID A group id whos parent should be opened.
 */
export function openParentGroup(sourceGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[sourceGroupID];

    if (group && group.parent) {
      dispatch({
        type: NotesActions.OPEN_GROUP,
        payload: group.parent
      });
    }
  };
}

/**
 * Navigate to the root group.
 */
export function openRootGroup() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesActions.OPEN_GROUP,
      payload: "root"
    });
  };
}
