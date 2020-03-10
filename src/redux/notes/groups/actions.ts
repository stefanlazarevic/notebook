import { NoteGroupID, NotesGroupsActions } from "../groups/types";
import { NoteRecordID } from "../records/types";
import { IDispatch, AppState } from "../../types";

type GroupOrRecordID = NoteGroupID | NoteRecordID;

export function insert(groupID: string, itemID: GroupOrRecordID) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { groups, records } = notes;

    if (groups[groupID] && (groups[itemID] || records[itemID])) {
      if (groups[groupID].children.find(id => id === itemID)) {
        return;
      }

      dispatch({
        type: NotesGroupsActions.REPLACE,
        payload: {
          ...groups[groupID],
          children: groups[groupID].children.concat(itemID)
        }
      });
    }
  };
}
