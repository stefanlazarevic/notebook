import { NoteGroupID } from "../../../../redux/notes/groups/types";

export interface NoteGroupProps {
  id: string;
  index: number;

  tabIndex?: number;
  title?: string;

  onDrop?: (targetGroupID: NoteGroupID, children: string[]) => void;
  onDoubleClick?: (targetGroupID: NoteGroupID) => void;
}
