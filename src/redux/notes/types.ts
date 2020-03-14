import { NotesRecords } from "./records/types";
import { NotesGroups, NoteGroupID } from "./groups/types";

export type NotesState = {
  currentGroupID: NoteGroupID;
  groups: NotesGroups;
  records: NotesRecords;
};

export enum NotesActions {
  OPEN_GROUP = "Notes/Actions/Group/OPEN_GROUP",
  INSERT_RECORD = "Notes/Actions/INSERT_RECORD",
  REMOVE_RECORD = "Notes/Actions/REMOVE_RECORD"
}
