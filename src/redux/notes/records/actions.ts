import { NoteRecord, NotesRecordsActions } from "./types";
import { IDispatch, AppState } from "../../types";
import utils from "../../../utils/index";

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
