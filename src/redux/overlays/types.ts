export enum OverlayType {
  DELETE_RECORD,
  RENAME_RECORD
}

export interface Overlay {
  id: string;
  type: OverlayType;
}

export type OverlayState = Overlay[];

export enum OverlaysActions {
  OPEN_OVERLAY = "Overlays/Actions/OPEN_OVERLAY",
  CLOSE_OVERLAY = "Overlays/Actions/CLOSE_OVERLAY"
}
