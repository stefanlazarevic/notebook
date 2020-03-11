import { connect } from "react-redux";
import { createSelector } from "reselect";

import Notes from "./Notes";

import { AppState } from "../../redux/types";
import { getGroupChildren } from "./selectors";

const getGroupChildrenSelector = createSelector(
  [getGroupChildren],
  children => children
);

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { group } = notes;

  return {
    children: getGroupChildrenSelector(state, group)
  };
}

export default connect(mapStateToProps)(Notes);
