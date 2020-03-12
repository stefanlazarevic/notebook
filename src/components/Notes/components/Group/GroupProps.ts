import { NoteGroupID } from "../../../../redux/notes/groups/types";

export interface NoteGroupProps {
  id: NoteGroupID;
  index: number;

  tabIndex?: number;
  title?: string;
  parent: NoteGroupID;
  groupParent?: NoteGroupID;

  moveToGroup?: (targetGroupID: NoteGroupID, children: string[]) => void;
  onDoubleClick?: (targetGroupID: NoteGroupID) => void;
}
