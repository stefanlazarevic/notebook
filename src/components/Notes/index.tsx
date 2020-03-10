// import React from "react";
import { connect } from "react-redux";

import Notes from "./Notes";
import { AppState, IDispatch } from "../../redux/types";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { moveToGroup } from "../../redux/notes/groups/actions";
import { openGroup } from "../../redux/notes/group/actions";

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { group, groups, records } = notes;

  const groupRecords = groups[group].children;

  return {
    records: groupRecords,
    getGroup: (id: string) => groups[id],
    getRecord: (id: string) => records[id]
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    moveToGroup: (targetGroupID: NoteGroupID, children: string[]) =>
      dispatch(moveToGroup(targetGroupID, children)),
    openGroup: (groupID: NoteGroupID) => dispatch(openGroup(groupID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
