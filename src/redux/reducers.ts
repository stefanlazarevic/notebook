import { combineReducers } from "redux";
import notesReducers from "./notes/reducers";
import editorReducer from "./editor/reducer";
import settingsReducers from "./settings/reducers";
import overlaysReducer from "./overlays/reducer";
import printReducer from "./print/reducer";

export default combineReducers({
  notes: notesReducers,
  editor: editorReducer,
  settings: settingsReducers,
  overlays: overlaysReducer,
  print: printReducer
});
