import { NotesRecords } from "./records/types";
import { NotesGroups, NoteGroupID } from "./groups/types";

export type NotesState = {
  currentGroupID: NoteGroupID;
  groups: NotesGroups;
  records: NotesRecords;
};

export enum NotesActions {
  OPEN_GROUP = "Notes/Actions/Group/OPEN_GROUP"
}
