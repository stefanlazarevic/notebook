import { RawDraftContentState } from "draft-js";

export type NoteRecord = {
  id: string;
  title: string;
  content: RawDraftContentState;
};

export type NotesRecords = {
  [id: string]: NoteRecord;
};

export enum NotesRecordsActions {
  "REPLACE" = "Notes/Records/Actions/REPLACE",
  "REPLACE_ALL" = "Notes/Records/Actions/REPLACE_ALL"
}
