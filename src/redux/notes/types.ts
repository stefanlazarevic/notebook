import { NotesRecords } from "./records/types";
import { NotesGroups, NoteGroupID } from "./groups/types";

export type NotesState = {
  currentGroupID: NoteGroupID;
  groups: NotesGroups;
  records: NotesRecords;
};

export enum NotesActions {
  OPEN_GROUP = "Notes/Actions/Group/OPEN_GROUP",
  CREATE_RECORD = "Notes/Actions/CREATE_RECORD",
  REMOVE_RECORD = "Notes/Actions/REMOVE_RECORD",
  UPDATE_RECORD = "Notes/Actions/UPDATE_RECORD",
  CREATE_GROUP = "Notes/Actions/CREATE_GROUP",
  REMOVE_GROUP = "Notes/Actions/REMOVE_GROUP",
  MOVE_GROUP = "Notes/Actions/MOVE_GROUP",
  MOVE_RECORD = "Notes/Actions/MOVE_RECORD",
  REORDER = "Notes/Actions/REORDER"
}
