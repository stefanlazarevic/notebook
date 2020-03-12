import { connect } from "react-redux";

import Navigator from "./Navigator";
import { AppState, IDispatch } from "../../redux/types";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { openGroup, openParentGroup } from "../../redux/notes/group/actions";

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { currentGroupID, groups } = notes;

  const currentGroup = groups[currentGroupID];

  return {
    open: Boolean(currentGroup.parent),
    currentGroupID
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    openGroup: (targetGroupID: NoteGroupID) =>
      dispatch(openGroup(targetGroupID)),
    openParentGroup: (currentGroupID: NoteGroupID) =>
      dispatch(openParentGroup(currentGroupID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
