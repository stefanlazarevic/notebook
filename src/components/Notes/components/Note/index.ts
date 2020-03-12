import { connect, batch } from "react-redux";

import Note from "./Note";

import { AppState, IDispatch } from "../../../../redux/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";
import {
  moveToGroup,
  swapGroupChildren,
  removeFromGroup
} from "../../../../redux/notes/groups/actions";
import { openGroup } from "../../../../redux/notes/group/actions";
import { openEditor } from "../../../../redux/editor/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";
import { removeRecord } from "../../../../redux/notes/records/actions";

function mapStateToProps(state: AppState, ownProps: any) {
  const { id, index, tabIndex } = ownProps;

  const { notes } = state;
  const { records, groups, group: groupID } = notes;

  const group = groups[groupID];
  const note = records[id] || groups[id];

  return {
    index,
    tabIndex,
    ...note,
    groupParent: group.parent
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    moveToGroup: (targetGroupID: NoteGroupID, children: string[]) =>
      dispatch(moveToGroup(targetGroupID, children)),
    openGroup: (groupID: NoteGroupID) => dispatch(openGroup(groupID)),
    swapGroupChildren: (sourceIndex: number, targetIndex: number) =>
      dispatch(swapGroupChildren(sourceIndex, targetIndex)),
    openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID)),
    removeRecordFromGroup: (groupID: NoteGroupID, recordID: NoteRecordID) => {
      batch(() => {
        dispatch(removeRecord(recordID));
        dispatch(removeFromGroup(groupID, [recordID]));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
