export type NoteEditorHeaderProps = {
  maximized?: boolean;

  onClose: () => void;
  onResize: () => void;
  onChange: () => void;
};
