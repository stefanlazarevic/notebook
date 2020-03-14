import { connect, batch } from "react-redux";

import Note from "./Note";

import { AppState, IDispatch } from "../../../../redux/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";
import {
  moveToGroup,
  swapGroupChildren,
  removeFromGroup
} from "../../../../redux/notes/groups/actions";
import { openEditor } from "../../../../redux/editor/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";
import { removeRecord } from "../../../../redux/notes/records/actions";
import { openGroup } from "../../../../redux/notes/actions";

function mapStateToProps(state: AppState, ownProps: any) {
  const { id, index, tabIndex } = ownProps;

  const { notes } = state;
  const { records, groups, currentGroupID } = notes;

  const group = groups[currentGroupID];
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
    openGroup: (targetGroupID: NoteGroupID) =>
      dispatch(openGroup(targetGroupID)),
    swapGroupChildren: (sourceIndex: number, targetIndex: number) =>
      dispatch(swapGroupChildren(sourceIndex, targetIndex)),
    openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID)),
    removeRecordFromGroup: (
      targetGroupID: NoteGroupID,
      recordID: NoteRecordID
    ) => {
      batch(() => {
        dispatch(removeRecord(recordID));
        dispatch(removeFromGroup(targetGroupID, [recordID]));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
