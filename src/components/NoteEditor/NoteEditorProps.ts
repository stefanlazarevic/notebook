import { NoteRecord } from "../../redux/notes/records/types";

export type NoteEditorProps = {
  open: boolean;
  maximized?: boolean;
  id?: string;

  updateOrInsert: (record: NoteRecord) => void;
  close: () => void;
};

export const NoteEditorDefaultProps: Partial<NoteEditorProps> = {
  open: false,
  maximized: false
};
