import { connect } from "react-redux";

import Navigator from "./Navigator";
import { AppState, IDispatch } from "../../redux/types";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { openGroup, openParentGroup } from "../../redux/notes/group/actions";

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { group: groupID, groups } = notes;

  const currentGroup = groups[groupID];

  return {
    open: Boolean(currentGroup.parent),
    currentGroupID: groupID
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    openGroup: (groupID: NoteGroupID) => dispatch(openGroup(groupID)),
    openParentGroup: (currentGroupID: NoteGroupID) =>
      dispatch(openParentGroup(currentGroupID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
