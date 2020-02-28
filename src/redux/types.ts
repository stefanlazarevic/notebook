import { NotesState } from "./notes/types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type AppState = {
  notes: NotesState;
};

export interface IDispatch extends ThunkDispatch<AppState, {}, AnyAction> {}
