import { NoteGroupID } from "../groups/types";
import { NotesGroupActions } from "./types";
import { IDispatch, AppState } from "../../types";

export function openGroup(groupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesGroupActions.REPLACE,
      payload: groupID
    });
  };
}

export function openParentGroup(currentGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[currentGroupID];

    if (group && group.parent) {
      dispatch({
        type: NotesGroupActions.REPLACE,
        payload: group.parent
      });
    }
  };
}

export function openRootGroup() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesGroupActions.REPLACE,
      payload: "root"
    });
  };
}
