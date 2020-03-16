import { RawDraftContentState } from "draft-js";
import { NoteRecordID } from "../../../../redux/notes/records/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";

export interface RecordCallbackProps {
  /**
   * Callback function executed on `drop` action.
   *
   * @param sourceIndex Index of the first `NoteRecord` to swap.
   * @param targetIndex Index of the second `NoteRecord` to swap.
   * @optional
   */
  onSwap?: (sourceIndex: number, targetIndex: number) => void;

  /**
   * Callback function executed on `open` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onOpen?: (id: NoteRecordID) => void;

  /**
   * Callback function executed on `remove` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onRemove?: (id: NoteRecordID) => void;

  /**
   * Callback function executed on `rename` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onRename?: (id: NoteRecordID) => void;

  /**
   * Callback function executed on `ungroup` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onUngroup?: (id: NoteRecordID) => void;

  /**
   * Callback function executed on `copy` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onCopy?: (id: NoteRecordID) => void;

  /**
   * Callback function executed on `cut` action.
   *
   * @param id A `NoteRecord` unique identifier.
   * @optional
   */
  onCut?: (id: NoteRecordID) => void;
}

export interface RecordProps extends RecordCallbackProps {
  /**
   * A `NoteRecord` content.
   */
  content: RawDraftContentState;

  /**
   * A `NoteRecord` unique identifier.
   *
   * @required
   */
  id: NoteRecordID;

  /**
   * Index at which record is located in the `notes.[group].children` array.
   * Primarly used for record swapping.
   *
   * @required
   */
  index: number;

  /**
   * A `NoteRecord` title (heading).
   *
   * @required
   */
  title: string;

  /**
   * A group identifier in which this record exists.
   *
   * @required
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
}
