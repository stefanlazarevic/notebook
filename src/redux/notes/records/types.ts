import { RawDraftContentState } from "draft-js";

export type NoteRecordID = string;

export type NoteRecord = {
  id: NoteRecordID;
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
