import { NoteRecord, NotesRecordsActions } from "./types";
import { IDispatch, AppState } from "../../types";
import utils from "../../../utils/index";

/**
 * Insert new NoteRecord object in the NotesRecords state Map.
 */
export function insertRecord(record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;

    if (!record) {
      throw Error(`NoteRecord object is absent.`);
    }

    if (!record.id || records[record.id]) {
      throw Error(`NoteRecord with the ID ${record.id} already exists.`);
    }

    dispatch({
      type: NotesRecordsActions.REPLACE_ALL,
      payload: { ...records, [record.id]: record }
    });
  };
}

export function updateRecord(record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => any) => {
    const { notes } = getState();
    const { records } = notes;

    if (!record) {
      throw Error(`NoteRecord must contain valid ID.`);
    }

    if (!records[record.id]) {
      throw Error(`NoteRecord with ID ${record.id} is absent.`);
    }

    dispatch({
      type: NotesRecordsActions.REPLACE,
      payload: record
    });
  };
}

export function removeRecord(id: string) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;

    if (!id || !records[id]) {
      throw Error(`NoteRecord with the ID ${id} is absent.`);
    }

    dispatch({
      type: NotesRecordsActions.REPLACE_ALL,
      payload: utils.object.deleteProperty(id, records)
    });
  };
}
