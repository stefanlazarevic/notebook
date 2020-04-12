export enum ChangeIndicatorState {
  IDLE,
  SAVED,
  UNSAVED
}

export interface ChangeIndicatorProps {
  state: ChangeIndicatorState;
}
