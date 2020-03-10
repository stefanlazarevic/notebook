import { NoteRecord } from "../../redux/notes/records/types";
import { NoteGroupID } from "../../redux/notes/groups/types";

export interface AppEditorProps {
  id?: string;
  maximized: boolean;
  autoSave: boolean;
  saveAndClose: boolean;
  spellCheck: boolean;
  group: NoteGroupID;

  onClose?: () => void;
  onSave?: (group: NoteGroupID, record: NoteRecord) => void;
}

export interface AppEditorContainerProps extends AppEditorProps {
  open: boolean;
}
