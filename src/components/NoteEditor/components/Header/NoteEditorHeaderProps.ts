export type NoteEditorHeaderProps = {
  maximized?: boolean;
  saved?: boolean;

  onClose: () => void;
  onResize: () => void;
  onChange: () => void;
};
