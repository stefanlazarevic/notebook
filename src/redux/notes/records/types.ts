export type NoteRecord = {
  id: string;
  title: string;
  content: string;
};

export type NotesRecords = {
  [id: string]: NoteRecord;
};

export enum NotesRecordsActions {
  "REPLACE" = "Notes/Records/Actions/REPLACE",
  "REPLACE_ALL" = "Notes/Records/Actions/REPLACE_ALL"
}
