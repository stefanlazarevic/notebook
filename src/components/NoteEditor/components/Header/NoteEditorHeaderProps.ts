export type NoteEditorHeaderProps = {
  maximized?: boolean;
  saved?: boolean;
  id?: string;

  onClose: () => void;
  onResize: () => void;
  onChange: () => void;
};
