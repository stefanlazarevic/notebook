import { NoteGroupID, NoteGroup } from "./groups/types";
import { IDispatch, AppState } from "../types";
import { NotesActions } from "./types";
import { NoteRecord, NoteRecordID } from "./records/types";
import utils from "../../utils";

/**
 * Navigate to the group.
 *
 * @param targetGroupID A group id which should be open.
 */
export function openGroup(targetGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesActions.OPEN_GROUP,
      payload: targetGroupID
    });
  };
}

/**
 * Navigate to the parent group.
 *
 * @param sourceGroupID A group id whos parent should be opened.
 */
export function openParentGroup(sourceGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[sourceGroupID];

    if (group && group.path && group.path.length > 0) {
      dispatch({
        type: NotesActions.OPEN_GROUP,
        payload: utils.array.last(group.path)
      });
    }
  };
}

/**
 * Navigate to the root group.
 */
export function openRootGroup() {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    dispatch({
      type: NotesActions.OPEN_GROUP,
      payload: "root"
    });
  };
}

/**
 * Insert newly created record in the redux state.
 *
 * @param targetGroupID Group in which new record should be put.
 * @param record NoteRecord object
 */
export function createRecord(targetGroupID: NoteGroupID, record: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records, groups } = notes;
    const group = groups[targetGroupID];

    if (!record.id || records[record.id]) {
      throw Error(`NoteRecord with the ID ${record.id} already exists.`);
    }

    if (!group) {
      throw Error(`NoteGroup with the ID ${targetGroupID} is absent`);
    }

    dispatch({
      type: NotesActions.CREATE_RECORD,
      payload: {
        ...record,
        parent: targetGroupID
      }
    });
  };
}

/**
 * Remove existing record.
 *
 * @param recordID Record id to remove.
 */
export function removeRecord(recordID: NoteRecordID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;
    const record = records[recordID];

    if (!recordID) {
      throw Error("NoteRecord ID is absent.");
    }

    if (!record) {
      throw Error(`NoteRecord with the ID ${recordID} is absent.`);
    }

    dispatch({
      type: NotesActions.REMOVE_RECORD,
      payload: record
    });
  };
}

/**
 * Update existing record.
 *
 * @param changedRecord Modified NoteRecord object.
 */
export function updateRecord(changedRecord: NoteRecord) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { records } = notes;

    const record = records[changedRecord.id];

    if (!record) {
      throw Error(`NoteRecord with ID ${changedRecord.id} is absent.`);
    }

    if (record.parent !== changedRecord.parent) {
      throw Error(
        `Changing record location is not permitted. If your intention was moving record to another group, consider using the "moveToGroup" function.`
      );
    }

    dispatch({
      type: NotesActions.UPDATE_RECORD,
      payload: changedRecord
    });
  };
}

/**
 * Create new group.
 *
 * @param targetGroupID Group ID where new group should be inserted.
 * @param group NoteGroup object.
 */
export function createNewGroup(targetGroupID: NoteGroupID, group: NoteGroup) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const targetGroup = groups[targetGroupID];

    if (!targetGroup) {
      throw Error(`NoteGroup with ID ${targetGroupID} is absent.`);
    }

    if (groups[group.id]) {
      throw Error(`NoteGroup with ID ${group.id} already exist.`);
    }

    dispatch({
      type: NotesActions.CREATE_GROUP,
      payload: {
        ...group,
        targetGroupID
      }
    });
  };
}

export function updateGroup(
  id: NoteGroupID,
  updatedAttributes: Partial<NoteGroup>
) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;
    const group = groups[id];

    if (!group) {
      throw Error(`NoteGroup with ID ${id} is absent.`);
    }

    dispatch({
      type: NotesActions.UPDATE_GROUP,
      payload: {
        ...group,
        ...updatedAttributes
      }
    });
  };
}

export function removeGroup(targetGroupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes, tabs } = getState();
    const { groups } = notes;
    const { records } = tabs;

    const group = groups[targetGroupID];

    if (!group) {
      throw Error(`NoteGroup with ID ${targetGroupID} is absent.`);
    }

    if (group.children.length > 0) {
      throw Error(`NoteGroup must be empty before removing.`);
    }

    const newRecords = Array(records.length);

    for (let i = 0; i < records.length; i++) {
      const folderID = records[i];

      if (folderID === targetGroupID) {
        const id = utils.array.last(groups[folderID].path);

        newRecords[i] = id;
      } else {
        newRecords[i] = records[i];
      }
    }

    dispatch({
      type: NotesActions.REMOVE_GROUP,
      payload: {
        ...group,
        parentGroupId: utils.array.last(group.path),
        records: newRecords
      }
    });
  };
}

export function moveToGroup(
  targetGroupID: NoteGroupID,
  id: NoteGroupID | NoteRecordID
) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups, records } = notes;
    const targetGroup = groups[targetGroupID];
    const group = groups[id];
    const record = records[id];

    if (!targetGroup) {
      throw Error(`NoteGroup with ID ${targetGroupID} is absent.`);
    }

    if (!group && !record) {
      throw Error(`ID ${id} does not belong to any NoteRecord or NoteGroup.`);
    }

    if (group) {
      const parentFolderID = utils.array.last(group.path) || "root";

      const newFolderTree = {
        ...groups,
        [parentFolderID]: {
          ...groups[parentFolderID],
          children: groups[parentFolderID].children.filter(_id => _id !== id)
        },
        [targetGroupID]: {
          ...groups[targetGroupID],
          children: groups[targetGroupID].children.concat(id)
        },
        [id]: { ...groups[id], path: targetGroup.path.concat(targetGroupID) }
      };

      const queue: string[] = [id];

      // Breath first traverse.
      (function processQueue() {
        if (queue.length === 0) {
          return;
        }

        const id = queue.pop()!;
        const parentFolder = newFolderTree[id];

        const children = parentFolder.children;

        for (let i = 0; i < children.length; i++) {
          const childFolder = newFolderTree[children[i]];

          if (childFolder && childFolder.children !== undefined) {
            childFolder.path = parentFolder.path.concat(parentFolder.id);
            newFolderTree[childFolder.id] = childFolder;

            queue.push(childFolder.id);
          }
        }

        processQueue();
      })();

      dispatch({
        type: NotesActions.MOVE_GROUP,
        payload: newFolderTree
      });
    }

    if (record) {
      dispatch({
        type: NotesActions.MOVE_RECORD,
        payload: {
          ...record,
          targetGroupID: targetGroupID
        }
      });
    }
  };
}

export function ungroupGroup(id: NoteRecordID | NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { currentGroupID, groups } = notes;

    const currentGroup = groups[currentGroupID];

    if (!currentGroup.path || currentGroup.path.length < 1) {
      throw Error(`Ungroup is not allowed in root group.`);
    }

    const targetGroup = groups[utils.array.last(currentGroup.path)];

    dispatch(moveToGroup(targetGroup.id, id));
  };
}

export const ungroupRecord = ungroupGroup;

export function swapCurrentGroupChildren(
  sourceIndex: number,
  targetIndex: number
) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { currentGroupID, groups } = notes;

    const group = groups[currentGroupID];

    dispatch({
      type: NotesActions.REORDER,
      payload: {
        ...group,
        children: utils.array.swap(sourceIndex, targetIndex, group.children)
      }
    });
  };
}
