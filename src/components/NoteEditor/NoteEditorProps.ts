import { NoteRecord } from "../../redux/notes/records/types";

export interface NoteEditorProps {
  open: boolean;
  maximized?: boolean;
  id?: string;
  spellCheck?: boolean;
  autoSave?: boolean;
  saveAndClose?: boolean;

  updateOrInsert: (record: NoteRecord) => void;
  close: () => void;
}

export const NoteEditorDefaultProps: Partial<NoteEditorProps> = {
  open: false,
  maximized: false
};
