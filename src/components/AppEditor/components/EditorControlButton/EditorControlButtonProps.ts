import { EditorCommand } from "../../layout/Editor/Commands";

export interface EditorControlButtonProps {
  command: EditorCommand;
  active: boolean;
  title?: string;
  tabIndex?: number;
  children: React.ReactNode;

  onClick?: (event: React.MouseEvent, command: EditorCommand) => void;
}
