import { NoteRecord } from "../../redux/notes/records/types";
import { NoteGroupID } from "../../redux/notes/groups/types";

export interface AppEditorProps {
  id?: string;
  title?: string;

  maximized: boolean;
  autoSave: boolean;
  saveAndClose: boolean;
  spellCheck: boolean;
  groupID: NoteGroupID;

  onClose?: () => void;
  onSave?: (groupID: NoteGroupID, record: NoteRecord) => void;
  onUpdate?: (record: NoteRecord) => void;
}

export interface AppEditorContainerProps extends AppEditorProps {
  open: boolean;
}
