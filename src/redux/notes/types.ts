import { NotesRecords } from "./records/types";
import { NotesGroups, NoteGroupID } from "./groups/types";

export type NotesState = {
  groups: NotesGroups;
  records: NotesRecords;
  group: NoteGroupID;
};
