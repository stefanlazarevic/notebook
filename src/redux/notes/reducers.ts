import { combineReducers } from "redux";
import notesRecordsReducer from "./records/reducer";

export default combineReducers({
  records: notesRecordsReducer
});
