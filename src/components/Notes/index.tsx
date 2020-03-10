// import React from "react";
import { connect } from "react-redux";

import Notes from "./Notes";
import { AppState, IDispatch } from "../../redux/types";

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { group, groups, records } = notes;

  const groupRecords = groups[group].children;

  console.log(groupRecords);

  return {
    records: groupRecords,
    getGroup: (id: string) => groups[id],
    getRecord: (id: string) => records[id]
  };
}

function mapDispatchWithProps(dispatch: IDispatch) {
  return {};
}

export default connect(mapStateToProps, null)(Notes);
