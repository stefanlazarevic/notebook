import { combineReducers } from "redux";
import notesReducers from "./notes/reducers";
import { editorReducer } from "./editor/reducer";

export default combineReducers({
  notes: notesReducers,
  editor: editorReducer
});
