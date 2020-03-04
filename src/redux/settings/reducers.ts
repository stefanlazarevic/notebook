import { combineReducers } from "redux";
import editorSettingsReducer from "./editor/reducer";
import notesSettingsReducer from "./notes/reducer";

export default combineReducers({
  editor: editorSettingsReducer,
  notes: notesSettingsReducer
});
