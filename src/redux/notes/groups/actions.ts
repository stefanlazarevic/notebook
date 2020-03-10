import { NoteGroupID, NotesGroupsActions, NoteGroup } from "../groups/types";
import { NoteRecordID, NotesRecordsActions } from "../records/types";
import { IDispatch, AppState } from "../../types";
import utils from "../../../utils";
import { batch } from "react-redux";

type GroupOrRecordID = NoteGroupID | NoteRecordID;

export function createNewGroup(parentGroupID: NoteGroupID, group: NoteGroup) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const parentGroup = groups[parentGroupID];

    if (parentGroup && !groups[group.id]) {
      dispatch({
        type: NotesGroupsActions.REPLACE_ALL,
        payload: {
          ...groups,
          [parentGroupID]: {
            ...parentGroup,
            children: parentGroup.children.concat(group.id)
          },
          [group.id]: { ...group, parent: parentGroupID }
        }
      });
    }
  };
}

export function deleteExistingGroup(groupID: NoteGroupID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[groupID];

    // Deletion is allowed only if the group is empty.
    if (group && group.parent && group.children.length === 0) {
      const parentGroup = groups[group.parent];

      dispatch({
        type: NotesGroupsActions.REPLACE_ALL,
        payload: utils.object.deleteProperty(groupID, {
          ...groups,
          [parentGroup.id]: {
            ...parentGroup,
            children: parentGroup.children.filter(id => id !== groupID)
          }
        })
      });
    }
  };
}

export function moveToGroup(targetGroupID: NoteGroupID, children: string[]) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups: originalGroups, records: originalRecords } = notes;

    const targetGroup = originalGroups[targetGroupID];

    if (!targetGroup) {
      return;
    }

    const groups = {
      ...originalGroups,
      [targetGroupID]: {
        ...targetGroup,
        children: targetGroup.children.concat(children)
      }
    };

    const records = {
      ...originalRecords
    };

    const map = new Map();

    // Keep track of all moving ids.
    for (let i = 0; i < children.length; i++) {
      map.set(children[i], true);
    }

    // Handle group moving.
    for (let i = 0; i < children.length; i++) {
      const id = children[i];
      const group = groups[id];

      if (group && group.parent) {
        const parentGroup = groups[group.parent];

        groups[parentGroup.id] = {
          ...parentGroup,
          children: parentGroup.children.filter(id => !map.has(id))
        };
      }
    }

    // Handle records moving.
    for (let i = 0; i < children.length; i++) {
      const id = children[i];
      const record = records[id];

      records[record.id].parent = targetGroup.id;
    }

    batch(() => {
      dispatch({
        type: NotesGroupsActions.REPLACE_ALL,
        payload: groups
      });

      dispatch({
        type: NotesRecordsActions.REPLACE_ALL,
        payload: records
      });
    });
  };
}

export function ungroup(groupID: NoteGroupID, children: string[]) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups } = notes;

    const group = groups[groupID];

    if (group && group.parent) {
      dispatch(moveToGroup(group.parent, children));
    }
  };
}
