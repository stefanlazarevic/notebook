import { RawDraftContentState } from "draft-js";
import { NoteGroupID } from "../groups/types";

export type NoteRecordID = string;

export type NoteRecord = {
  id: NoteRecordID;
  parent: NoteGroupID;
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
