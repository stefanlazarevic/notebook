import { NoteRecord } from "../../redux/notes/records/types";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { RawDraftContentState } from "draft-js";

export interface AppEditorProps {
  id?: string;
  title?: string;
  content?: RawDraftContentState;

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
