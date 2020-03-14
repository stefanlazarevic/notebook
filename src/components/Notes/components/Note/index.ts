import { connect } from "react-redux";

import Note from "./Note";

import { AppState, IDispatch } from "../../../../redux/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";
import { swapGroupChildren } from "../../../../redux/notes/groups/actions";
import { openEditor } from "../../../../redux/editor/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";
import {
  openGroup,
  removeRecord,
  removeGroup,
  moveToGroup,
  ungroup
} from "../../../../redux/notes/actions";

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
    moveToGroup: (targetGroupID: NoteGroupID, id: NoteGroupID | NoteRecordID) =>
      dispatch(moveToGroup(targetGroupID, id)),
    openGroup: (targetGroupID: NoteGroupID) =>
      dispatch(openGroup(targetGroupID)),
    swapGroupChildren: (sourceIndex: number, targetIndex: number) =>
      dispatch(swapGroupChildren(sourceIndex, targetIndex)),
    openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID)),
    removeRecord: (recordID: NoteRecordID) => dispatch(removeRecord(recordID)),
    removeGroup: (groupID: NoteGroupID) => dispatch(removeGroup(groupID)),
    ungroup: (id: NoteGroupID | NoteRecordID) => dispatch(ungroup(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
