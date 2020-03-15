import { connect } from "react-redux";

import Note from "./Note";

import { AppState, IDispatch } from "../../../../redux/types";
import { NoteGroupID } from "../../../../redux/notes/groups/types";
import { openEditor } from "../../../../redux/editor/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";
import {
  openGroup,
  removeGroup,
  moveToGroup,
  ungroup,
  swapCurrentGroupChildren
} from "../../../../redux/notes/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";

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
      dispatch(swapCurrentGroupChildren(sourceIndex, targetIndex)),
    openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID)),
    removeRecord: (recordID: NoteRecordID) =>
      dispatch(
        showOverlay(OverlayType.DELETE_RECORD, {
          recordID
        })
      ),
    removeGroup: (groupID: NoteGroupID) => dispatch(removeGroup(groupID)),
    ungroup: (id: NoteGroupID | NoteRecordID) => dispatch(ungroup(id)),
    renameRecord: (recordID: NoteRecordID) =>
      dispatch(showOverlay(OverlayType.RENAME_RECORD, { recordID })),
    renameGroup: (groupID: NoteGroupID) =>
      dispatch(showOverlay(OverlayType.RENAME_GROUP, { groupID }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
