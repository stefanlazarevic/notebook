import { combineReducers } from "redux";

import recordsReducer from "./records/reducer";
import groupsReducer from "./groups/reducer";
import groupReducer from "./group/reducer";

export default combineReducers({
  currentGroupID: groupReducer,
  groups: groupsReducer,
  records: recordsReducer
});
