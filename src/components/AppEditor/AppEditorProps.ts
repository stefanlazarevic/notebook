import { NoteRecord } from "../../redux/notes/records/types";

export interface AppEditorProps {
  id?: string;
  maximized: boolean;
  autoSave: boolean;
  saveAndClose: boolean;
  spellCheck: boolean;

  onClose?: () => void;
  onSave?: (record: NoteRecord) => void;
}

export interface AppEditorContainerProps extends AppEditorProps {
  open: boolean;
}
