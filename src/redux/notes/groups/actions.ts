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

/**
 * 1. Find target group by targetGroupID.
 * 2. Concatenate all children ids to the target group.
 *
 * // Sync.
 * 3. Create a dictionary using ids from children.
 * 4. If group is a child put it's parent in the dictionary (map).
 * 5. If record is a child update it's parent to target.
 * 6.
 */
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

    const childrenSet = new Set<string>();
    const parentsSet = new Set<string>();

    for (let i = 0; i < children.length; i++) {
      const id = children[i];
      childrenSet.add(id);

      const record = records[id];
      const group = groups[id];

      if (record) {
        parentsSet.add(record.parent);

        records[record.id] = {
          ...record,
          parent: targetGroup.id
        };

        continue;
      }

      if (group) {
        if (group.parent) {
          parentsSet.add(group.parent);
        }

        groups[group.id] = {
          ...group,
          parent: targetGroup.id
        };
      }
    }

    parentsSet.forEach((groupID: string) => {
      if (targetGroup.id !== groupID) {
        const group = groups[groupID];

        groups[group.id] = {
          ...group,
          children: group.children.filter(id => !childrenSet.has(id))
        };
      }
    });

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

export function swapGroupChildren(sourceIndex: number, targetIndex: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { group: groupID, groups } = notes;

    const group = groups[groupID];

    dispatch({
      type: NotesGroupsActions.REPLACE,
      payload: {
        ...group,
        children: utils.array.swap(sourceIndex, targetIndex, group.children)
      }
    });
  };
}
