import { connect } from "react-redux";

import Note from "./Note";

import { AppState, IDispatch } from "../../../../redux/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";
import {
  moveToGroup,
  swapGroupChildren
} from "../../../../redux/notes/groups/actions";
import { openGroup } from "../../../../redux/notes/group/actions";
import { openEditor } from "../../../../redux/editor/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";

function mapStateToProps(state: AppState, ownProps: any) {
  const { id, index, tabIndex } = ownProps;

  const { notes } = state;
  const { records, groups } = notes;

  const note = records[id] || groups[id];

  return {
    index,
    tabIndex,
    ...note
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    moveToGroup: (targetGroupID: NoteGroupID, children: string[]) =>
      dispatch(moveToGroup(targetGroupID, children)),
    openGroup: (groupID: NoteGroupID) => dispatch(openGroup(groupID)),
    swapGroupChildren: (sourceIndex: number, targetIndex: number) =>
      dispatch(swapGroupChildren(sourceIndex, targetIndex)),
    openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
