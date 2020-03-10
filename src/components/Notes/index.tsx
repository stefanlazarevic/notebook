// import React from "react";
import { connect } from "react-redux";

import Notes from "./Notes";
import { AppState } from "../../redux/types";

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

export default connect(mapStateToProps, null)(Notes);
