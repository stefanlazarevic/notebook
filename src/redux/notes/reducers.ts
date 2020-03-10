import { combineReducers } from "redux";

import recordsReducer from "./records/reducer";
import groupsReducer from "./groups/reducer";
import groupReducer from "./pointer/reducer";

export default combineReducers({
  group: groupReducer,
  groups: groupsReducer,
  records: recordsReducer
});
