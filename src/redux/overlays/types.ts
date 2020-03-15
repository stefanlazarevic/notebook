import { NoteRecordID } from "../notes/records/types";
import { NoteGroupID } from "../notes/groups/types";

export enum OverlayType {
  DELETE_RECORD,
  RENAME_RECORD
}

export type OverlayID = string;

export interface Overlay {
  id: OverlayID;
  type: OverlayType;

  recordID?: NoteRecordID;
  groupID?: NoteGroupID;
}

export type OverlayState = Overlay[];

export enum OverlaysActions {
  OPEN_OVERLAY = "Overlays/Actions/OPEN_OVERLAY",
  CLOSE_OVERLAY = "Overlays/Actions/CLOSE_OVERLAY"
}
