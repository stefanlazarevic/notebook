import { NotesRecords } from "./records/types";
import { NotesGroups, NoteGroupID } from "./groups/types";

export type NotesState = {
  currentGroupID: NoteGroupID;
  groups: NotesGroups;
  records: NotesRecords;
};
