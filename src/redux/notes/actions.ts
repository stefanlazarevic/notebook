import { NoteGroupID } from "./groups/types";
import { IDispatch, AppState } from "../types";
import { NotesActions } from "./types";
import { NoteRecord, NoteRecordID } from "./records/types";

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

/**
 * Insert newly created record in the redux state.
 *
 * @param targetGroupID Group in which new record should be put.
 * @param record NoteRecord object
 */
export function insertRecord(targetGroupID: NoteGroupID, record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records, groups } = notes;
    const group = groups[targetGroupID];

    if (!record.id || records[record.id]) {
      throw Error(`NoteRecord with the ID ${record.id} already exists.`);
    }

    if (!group) {
      throw Error(`NoteGroup with the ID ${targetGroupID} is absent`);
    }

    dispatch({
      type: NotesActions.INSERT_RECORD,
      payload: {
        ...record,
        parent: targetGroupID
      }
    });
  };
}

export function removeRecord(recordID: NoteRecordID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;
    const record = records[recordID];

    if (!recordID) {
      throw Error("NoteRecord ID is absent.");
    }

    if (!record) {
      throw Error(`NoteRecord with the ID ${recordID} is absent.`);
    }

    dispatch({
      type: NotesActions.REMOVE_RECORD,
      payload: record
    });
  };
}
