import { RawDraftContentState } from "draft-js";
import { NoteGroupID } from "../groups/types";
import instructionsContentState from "../../../data/instructionsContentState";

/**
 * A `NoteRecord` unique identifier.
 */
export type NoteRecordID = string;

export type NoteRecord = {
  id: NoteRecordID;
  parent: NoteGroupID;
  title: string;
  content: RawDraftContentState;
  type: string;
  createdAt: number;

  // Temporary typescript workaround.
  children?: any;
  updatedAt?: number;
};

export type NotesRecords = {
  [id: string]: NoteRecord;
};

export const DEFAULT_RECORDS_STATE: NotesRecords = {
  instruction: {
    id: "instruction",
    parent: "ostalo",
    title: "INSTRUCTIONS",
    content: instructionsContentState,
    type: "Note",
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
};
