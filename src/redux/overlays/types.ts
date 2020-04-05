import { NoteRecordID } from "../notes/records/types";
import { NoteGroupID } from "../notes/groups/types";

export enum OverlayType {
  DELETE_RECORD,
  RENAME_RECORD,
  CREATE_DIRECTORY,
  RENAME_GROUP
}

export type OverlayID = string;

export interface Overlay {
  overlayID: OverlayID;
  type: OverlayType;

  id?: NoteRecordID | NoteGroupID;
}

export type OverlayState = Overlay[];

export enum OverlaysActions {
  OPEN_OVERLAY = "Overlays/Actions/OPEN_OVERLAY",
  CLOSE_OVERLAY = "Overlays/Actions/CLOSE_OVERLAY"
}
