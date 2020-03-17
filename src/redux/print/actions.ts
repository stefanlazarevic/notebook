import { NoteRecordID } from "../notes/records/types";
import { IDispatch, AppState } from "../types";

export function queuePrintRecords(ids: NoteRecordID[]) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: "REPLACE",
      payload: ids
    });
  };
}
