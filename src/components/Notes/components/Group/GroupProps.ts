import { NoteGroupID } from "../../../../redux/notes/groups/types";
import { NoteRecordID } from "../../../../redux/notes/records/types";

export interface NoteGroupCallbackProps {
  /**
   * Callback function executed on `open` action.
   *
   * @paran id A `NoteGroup` unique identifier.
   * @optional
   */
  onOpen?: (id: NoteGroupID) => void;

  /**
   * Callback function executed on `remove` action.
   *
   * @paran id A `NoteGroup` unique identifier.
   * @optional
   */
  onRemove?: (id: NoteGroupID) => void;

  /**
   * Callback function executed on `rename` action.
   *
   * @param id A `NoteGroup` unique identifier.
   * @optional
   */
  onRename?: (id: NoteGroupID) => void;

  /**
   * Callback function executed on `ungroup` action.
   *
   * @param id A `NoteGroup` unique identifier.
   * @optional
   */
  onUngroup?: (id: NoteGroupID) => void;

  /**
   * Callback function executed on `drop` action.
   *
   * @param groupID
   * @param id Dropped `NoteRecord` or `NoteGroup` unique identifier.
   * @optional
   */
  onMoveIn?: (groupID: NoteGroupID, id: NoteGroupID | NoteRecordID) => void;
}

export interface NoteGroupProps extends NoteGroupCallbackProps {
  /**
   * A `NoteGroup` unique identifier.
   *
   * @required
   */
  id: NoteGroupID;

  /**
   * Index at which group is located in the `notes.[group].children` array.
   * Primarly used for group swapping.
   *
   * @required
   */
  index: number;

  /**
   * A `NoteGroup` title (heading).
   *
   * @required
   */
  title: string;

  /**
   * A `NoteGroup` identifier which contains this group.
   */
  parent: NoteGroupID;

  /**
   * @optional
   */
  tabIndex?: number;

  /**
   * A current group parent group identifier.
   * Undefined if we are located in the root group.
   *
   * @optional
   */
  currentGroupParent?: NoteGroupID;

  /**
   * Indicator whether group has children or not.
   *
   * @optional
   */
  hasChildren?: boolean;
}
