import { NameInputReference } from "../../AppEditorReferences";
import { ChangeIndicatorState } from "../../components/ChangeIndicator/ChangeIndicatorProps";

export interface AppEditorHeaderProps {
  maximized: boolean;
  ref: NameInputReference;
  indicatorState: ChangeIndicatorState;

  onResize?: (maximized: boolean) => void;
  onClose?: () => void;
  onChange?: () => void;
}
