import { NoteGroupID } from "../../../../redux/notes/groups/types";

export interface NoteGroupProps {
  /**
   * Group unique identifier.
   */
  id: NoteGroupID;

  /**
   * Position of the group in the parent group array.
   */
  index: number;

  /**
   * Focus order number.
   */
  tabIndex?: number;

  /**
   * Name of the group.
   */
  title?: string;

  /**
   * Group id which contains this group.
   */
  parent: NoteGroupID;

  /**
   * Currently opened group parent group id.
   */
  groupParent?: NoteGroupID;

  moveToGroup?: (targetGroupID: NoteGroupID, children: string[]) => void;
  onDoubleClick?: (targetGroupID: NoteGroupID) => void;
}
