export enum OverlayType {
  CONFIRMATION
}

export interface Overlay {
  id: string;
  type: OverlayType;
}

export type OverlayState = Overlay[];

export enum OverlaysActions {
  REPLACE_ALL = "Overlays/Actions/REPLACE_ALL"
}
