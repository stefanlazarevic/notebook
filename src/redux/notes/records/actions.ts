import { NoteRecord, NotesRecordsActions } from "./types";
import { IDispatch, AppState } from "../../types";

/**
 * Insert new NoteRecord object in the NotesRecords state Map.
 */
export function insert(record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;

    if (!record) {
      throw Error(`Record object is absent.`);
    }

    if (!record.id || records[record.id]) {
      throw Error(`Record with the ID ${record.id} already exists.`);
    }

    dispatch({
      type: NotesRecordsActions.REPLACE_ALL,
      payload: record
    });
  };
}

export function update(record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => any) => {
    const { notes } = getState();
    const { records } = notes;

    if (!record) {
      throw Error(`NoteRecord must contain valid ID.`);
    }

    if (!records[record.id]) {
      throw Error(`Record with ID ${record.id} is absent.`);
    }

    dispatch({
      type: NotesRecordsActions.REPLACE,
      payload: record
    });
  };
}
